import mongoose from "mongoose";
const { Schema } = mongoose;

const usergSchema = new Schema(
  {
    name: { type: String, require: true, min: 2, max: 100 },
    email: { type: String, require: true, min: 2, max: 100 },
    password: { type: String, require: true, min: 5, max: 100 },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,

    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", usergSchema);
