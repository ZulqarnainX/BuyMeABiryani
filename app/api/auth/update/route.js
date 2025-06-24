import connectDb from "@/db/connectDb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();

    const {
      email,
      accountType,
      easypaisanum,
      easypaisaname,
      bio,
      description,
      profilepic,
      coverpic,
    } = body;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        accountType,
        easypaisanum,
        easypaisaname,
        bio,
        description,
        profilepic,
        coverpic,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedUser) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json({ message: "✅ Updated successfully" });
  } catch (err) {
    console.error("Update Error:", err);
    return Response.json({ error: "❌ Internal server error" }, { status: 500 });
  }
}
