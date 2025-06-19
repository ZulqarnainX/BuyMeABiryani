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
      if (account.provider === 'github') {
        await connectDb()

        const email = user?.email
        if (!email) return false

        let currentUser = await User.findOne({ email })

        if (!currentUser) {
          const newUser = await User.create({
            email,
            username: email.split('@')[0],
          })
          user.name = newUser.username
        } else {
          user.name = currentUser.username
        }

        return true
      }

      return true // fallback just in case
    },

    async session({ session }) {
      await connectDb()
      const dbUser = await User.findOne({ email: session.user.email })
      if (dbUser) {
        session.user.name = dbUser.username
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
