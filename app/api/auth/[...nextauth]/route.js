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
        console.log('▶ signIn triggered for:', user.email)

        await connectDb()
        const email = user?.email
        if (!email) {
          console.log('❌ Missing email')
          return false
        }

        let dbUser = await User.findOne({ email })

        if (!dbUser) {
          dbUser = await User.create({
            email,
            username: email.split('@')[0],
            name: user.name || email.split('@')[0],
            profilepic: user.image || '',
          })
          console.log('✅ User created:', dbUser.email)
        } else {
          console.log('✅ User exists:', dbUser.email)
        }

        user.name = dbUser.username
        return true
      } catch (err) {
        console.error('❌ signIn error:', err)
        return false
      }
    },

    async session({ session }) {
      try {
        await connectDb()
        const dbUser = await User.findOne({ email: session.user.email })
        if (dbUser) {
          session.user.username = dbUser.username
          session.user.profilepic = dbUser.profilepic || ''
        }
        return session
      } catch (err) {
        console.error('❌ session error:', err)
        return session
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
