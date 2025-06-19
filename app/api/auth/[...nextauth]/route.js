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
      async signIn({ user, account, profile, email, credentials }) {
         if(account.provider == "github") { 
          await connectDb()
          // Check if the user already exists in the database
          const currentUser =  await User.findOne({email: email}) 
          if(!currentUser){
            // Create a new user
             const newUser = await User.create({
              email: user.email, 
              username: user.email.split("@")[0], 
            })   
          } 
          return true
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
