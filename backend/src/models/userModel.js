import { Schema, model } from "mongoose";

const userModel = Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }, 
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const User=model.User ||model("User", userModel);
export default User;
