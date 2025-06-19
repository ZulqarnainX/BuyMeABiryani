import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import User from '@/models/User'
import connectDb from '@/db/connectDb'

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account.provider === 'github') {
          await connectDb()

          const email = user?.email
          if (!email) return false

          let existingUser = await User.findOne({ email })

          if (!existingUser) {
            const newUser = await User.create({
              email,
              username: email.split('@')[0],
            })
            user.name = newUser.username
          } else {
            user.name = existingUser.username
          }

          return true // ✅ Sign in allowed
        }

        return true // fallback: allow other providers if used
      } catch (error) {
        console.error('SignIn Error:', error)
        return false // ⛔ Deny on error
      }
    },

    async session({ session }) {
      try {
        await connectDb()
        const dbUser = await User.findOne({ email: session.user.email })
        if (dbUser) {
          session.user.name = dbUser.username
        }
        return session
      } catch (err) {
        console.error('Session Error:', err)
        return session
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
