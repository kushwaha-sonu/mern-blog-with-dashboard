import { generateJwtToken } from "../middleware/index.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  try {
    const user = req.body;

    let errorMessage = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    switch (true) {
      case user.name === "":
        errorMessage = "Name is required";
        break;
      case user.name.length < 3:
        errorMessage = "Name should be atleast 3 characters long";
        break;
      case !nameRegex.test(user.name):
        errorMessage =
          "Invalid name format. Only letters and spaces are allowed";
        break;
      case user.email === "":
        errorMessage = "Email is required";
        break;
      case !emailRegex.test(user.email):
        errorMessage = "Invalid email format";
        break;
      case user.password === "":
        errorMessage = "Password is required";
        break;
      case !user.password || user.password.length < 4:
        errorMessage = "Password should be atleast 4 characters long";
        break;
    }

    if (errorMessage) {
      return res.status(400).send({
        message: errorMessage,
      });
    }

    const userName = await User.findOne({ full_name: user.name });

    if (userName) {
      return res.status(400).send({
        message: "Name Already Taken",
      });
    }
    const userDb = await User.findOne({ email: user.email });

    if (userDb) {
      return res.status(400).send({
        message: "User Already Exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(user.password, salt);

    const newUser = new User({
      full_name: user.name,
      email: user.email,
      password: hashed_password,
    });
    await newUser.save();

    res.status(201).json({
      message: "Registration successful",
      // user: {
      //   full_name: newUser.full_name,
      //   email: newUser.email,
      // },
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email, password);

    let errorMessage = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (true) {
      case email === undefined || email === "":
        errorMessage = "Email is required";
        break;
      case !emailRegex.test(email):
        errorMessage = "Invalid email format";
        break;
      case password === undefined || password === "":
        errorMessage = "Password is required";
        break;
    }

    if (errorMessage) {
      return res.status(400).send({
        message: errorMessage,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({
        message: "User does not exist",
      });
    }

    const access_token = generateJwtToken(user, req, res);

    // console.log("Login Token:", access_token);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send({
        message: "Invalid password",
      });
    }

    res
      .status(200)
      .cookie("access_token", access_token, {
        httpOnly: true,
      })
      .json({
        message: "Login successful",
        user: {
          _id: user._id,
          full_name: user.full_name,
          email: user.email,
          photoUrl: user.photoUrl,
        },
        success: true,
      });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    // console.log(req.body);
    const { _id, name, email, old_password, new_password } = req.body;
    // console.log("Update Profile:", name, email, old_password, new_password, _id);

    let errorMessage = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    switch (true) {
      case name === null || name === "":
        errorMessage = "Name is required";
        break;
      case !name || name.length < 3:
        errorMessage = "Name should be atleast 3 characters long";
        break;
      case !nameRegex.test(name):
        errorMessage =
          "Invalid name format. Only letters and spaces are allowed";
        break;
      case email === null || email === "":
        errorMessage = "Email is required";
        break;
      case !emailRegex.test(email):
        errorMessage = "Invalid email format";
        break;
      case old_password === "":
        errorMessage = "Old password is required";
        break;
      case new_password === "":
        errorMessage = "New password is required";
        break;
      case !new_password || new_password.length < 4:
        errorMessage = "Password should be atleast 4 characters long";
        break;
      case old_password === new_password:
        errorMessage = "New password should be different from old password";
        break;
    }

    if (errorMessage) {
      return res.status(400).send({
        message: errorMessage,
      });
    }

    const user = await User.findById(_id);
    // console.log("User:", user);

    if (!user) {
      return res.status(400).send({
        message: "User does not exist",
      });
    }

    const isPasswordValid = await bcrypt.compare(old_password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send({
        message: "Invalid password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(new_password, salt);

    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          full_name: name,
          email: email,
          password: hashed_password,
        },
      },
      {
        new: true,
      }
    );

    // console.log("Updated User:", updatedUser);

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        _id: updatedUser._id,
        full_name: updatedUser.full_name,
        email: updatedUser.email,
      },
      success: true,
    });
  } catch (error) {
    console.log("Error updating profile:", error.message);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const { _id } = req.body;
    // console.log("Delete Profile:", _id);

    const response = await User.findByIdAndDelete(_id);

    if (!response) {
      return res.status(400).send({
        message: "User does not exist",
      });
    }

    res.status(200).json({
      message: "Profile deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error deleting profile:", error.message);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};
