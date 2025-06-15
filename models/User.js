import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    easypaisaname: { type: String },
    easypaisanum: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    accountType: {
        type: String,
        enum: ["Easypaisa", "JazzCash"], // change these values to match your options
        default: null,
    },
});

export default mongoose.models.User || model("User", UserSchema);;