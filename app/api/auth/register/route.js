import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

export async function POST(req) {
  try {
    await connectDb();

    const { email, password, username } = await req.json();

    if (!email || !password || !username) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "User registered successfully!",
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      }
    }, { status: 201 });

  } catch (error) {
    console.error("❌ Error in register API:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
