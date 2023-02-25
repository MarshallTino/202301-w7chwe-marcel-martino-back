import { model, Schema } from "mongoose";

export const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, minLength: 10, required: true },
  userImage: { type: String, required: false },
  friends: Object,
  enemies: Object,
});

export const User = model("User", userSchema, "users");

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
  },
});
