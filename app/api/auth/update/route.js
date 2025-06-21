import { NextResponse } from 'next/server';
import connectDb from '@/db/connectDb';
import User from '@/models/User';

export async function POST(req) {
  try {
    await connectDb();

    const body = await req.json();
    const { email, profilepic, coverpic, bio, description, easypaisanum, easypaisaname } = body;

    // Update user based on email
    const user = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          profilepic,
          coverpic,
          bio,
          description,
          easypaisanum,
          easypaisaname,
        },
      },
      { new: true } // return updated user
    );

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found." }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'User updated successfully',
      user,
    });
  } catch (error) {
    console.error('Update failed:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong while updating.' },
      { status: 500 }
    );
  }
}
