import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/db/connectDb";
import User from "@/models/User";
import { verifyPassword } from "@/lib/hash"; // ✅ uses bcrypt from hash.js

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDb();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("❌ No user found");
        }

        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) {
          throw new Error("❌ Invalid password");
        }

        return {
          id: user._id,
          email: user.email,
          name: user.username, // this will be available as session.user.name
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
