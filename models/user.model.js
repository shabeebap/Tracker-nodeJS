import mongoose from "mongoose";

const userSchemea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "usename is required"],
      trim: true,
      minlength: [3, "username must be at least 3 characters"],
      maxlength: [30, "username must be at most 30 characters"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "please fill a valid email address"],
    },
    password: {
      required: [true, "password is required"],
      type: String,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchemea);
export default User;
