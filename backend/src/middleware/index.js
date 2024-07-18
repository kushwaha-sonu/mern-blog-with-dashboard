import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

export const generateJwtToken = (user ,req,res) => {

  const token = sign({_id:user._id,email:user.email}, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 3600 * 1000,
  });
 return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  // console.log('Token:', token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Please Login to create blog", error: err.message });
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
