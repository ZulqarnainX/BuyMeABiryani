import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const authOptions = {
  providers: [
     GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
  ],
     callbacks: {
      aasync signIn({ user, account, profile }) {
  console.log("🧪 signIn() triggered")
  console.log("➡️ user:", user)
  console.log("➡️ profile:", profile)
  console.log("➡️ account:", account)

  const email = user?.email || profile?.email
  console.log("📧 Extracted email:", email)

  if (!email) {
    console.log("❌ Email is undefined. Sign-in denied.")
    return false // stop and show "Access Denied" page
  }

  try {
    await connectDb()

    let dbUser = await User.findOne({ email })

    if (!dbUser) {
      dbUser = await User.create({
        email,
        username: email.split("@")[0],
        name: user.name || email.split("@")[0],
        profilepic: user.image || "",
      })
      console.log("✅ Created new user:", dbUser.email)
    } else {
      console.log("✅ Found existing user:", dbUser.email)
    }

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
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
