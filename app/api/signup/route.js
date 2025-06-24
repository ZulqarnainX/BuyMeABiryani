import User from "@/models/User";
import connectDb from "@/db/connectDb";
import { hashPassword } from "@/lib/hash";

export async function POST(req) {
    const body = await req.json();
    const { email, password, username, name } = body;

    await connectDb();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return Response.json({ message: "❌ User already exists" }, { status: 400 });
    }


      const hashedPassword = await hashPassword(password);

    const newUser = new User({
        email,
        password: hashedPassword,
        username,
        name,
    });

    await newUser.save();

    return Response.json(
    { message: "✅ User created successfully" },
    { status: 201 }
  );
}