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
        message: "Name already exists",
      });
    }
    const userDb = await User.findOne({ email: user.email });

    if (userDb) {
      return res.status(400).send({
        message: "User already exists",
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

    res.status(201).send({
      message: "Registration successful",
      user: {
        full_name: newUser.full_name,
        email: newUser.email,
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

export const loginUser = async (req, res, next) => {
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

    const token = await generateJwtToken(user, req, res);

    if (!user) {
      return res.status(400).send({
        message: "User does not exist",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send({
        message: "Invalid password",
      });
    }

    res.status(200).send({
      message: "Login successful",
      user: {
        full_name: user.full_name,
        email: user.email,
        token: token,
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
