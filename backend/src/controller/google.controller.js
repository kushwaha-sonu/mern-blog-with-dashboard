import { generateJwtToken } from "../middleware/index.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

function generateFullName(name) {
  return (
    name.toLowerCase().split(" ").join("") +
    Math.random().toString(36).slice(-4)
  );
}

// The loginGoogle function
export const loginGoogle = async (req, res) => {
  const { email, name, photoUrl } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const token = await generateJwtToken(user, req, res);

      return res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 3600 * 1000,
        })
        .json({
          message: "Login successful",
          success: true,
          user: {
            _id: user._id,
            full_name: user.full_name,
            email: user.email,
            photoUrl: user.photoUrl,
          },
        });
    } else {
      const generateRandomPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashed_password = await bcrypt.hash(generateRandomPassword, 10);
      const full_name = generateFullName(name);
      const newUser = new User({
        full_name: full_name,
        email: email,
        password: hashed_password,
        photoUrl: photoUrl,
      });

      const savedUser = await newUser.save();

      if (savedUser) {
        const token = await generateJwtToken(savedUser, req, res);

        return res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 3600 * 1000,
          })
          .json({
            message: "Login successful",
            success: true,
            user: {
              _id: savedUser._id,
              full_name: savedUser.full_name,
              email: savedUser.email,
              photoUrl: savedUser.photoUrl,
            },
          });
      }
    }
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};
