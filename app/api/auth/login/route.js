import { NextResponse } from "next/server";
import connectDb from "@/db/connectDb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    await connectDb();

    const normalizedEmail = email.toLowerCase(); // ✅ Normalize

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Login successful!",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      }
    }, { status: 200 });

  } catch (err) {
    console.error("❌ Login error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
