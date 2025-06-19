import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import User from '@/models/User'
import connectDb from '@/db/connectDb'

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user user:email", // ✅ Fixes missing GitHub email
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
  try {
    await connectDb()
    const email = user?.email || profile?.email

    console.log("▶ Email received:", email)

    if (!email) {
      console.log("❌ Email missing from GitHub response.")
      return false
    }

    let dbUser = await User.findOne({ email })

    if (!dbUser) {
      dbUser = await User.create({
        email,
        username: email.split("@")[0],
        name: user.name || email.split("@")[0],
        profilepic: user.image || "",
      })
      console.log("✅ Created new user:", email)
    } else {
      console.log("✅ Existing user:", email)
    }

    user.name = dbUser.username
    return true
  } catch (err) {
    console.error("❌ signIn error:", err)
    return false
  }
},

    async session({ session }) {
      try {
        await connectDb()
        const dbUser = await User.findOne({ email: session.user.email })
        if (dbUser) {
          session.user.username = dbUser.username
          session.user.profilepic = dbUser.profilepic || ""
        }
        return session
      } catch (err) {
        console.error("❌ session error:", err)
        return session
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // ✅ Always needed
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
