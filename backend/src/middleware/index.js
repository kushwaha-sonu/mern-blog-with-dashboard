import jwt from "jsonwebtoken";

export const generateJwtToken = (user, req, res) => {
  try {
    if (!user) {
      return res.status(400).json({ message: "No User Found" });
    }
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    return res.status(500).json({ message: "Error generating token" });
  }
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  // console.log("Middleware Token:", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Please Login to create blog", error: err.message });
    }

    req.user = user;
    next();
  });
};




export const customErrorHandler = (err, req, res, next) => {
  if (err) {
    console.error("Error stack:", err.stack); // Log the stack trace for debugging
    console.error("Error message:", err.message); // Log the error message

    const statusCode = err.statusCode || 500;
    res
      .status(statusCode)
      .json({ message: err.message || "Something went wrong" });
  } else {
    next();
  }
};
