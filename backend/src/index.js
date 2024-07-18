import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./helper/dB.js";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import blogRoutes from "./routes/blog.route.js";
import { customErrorHandler } from "./middleware/index.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(customErrorHandler);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello From Backend");
});

app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

app.listen(process.env.PORT || 5000, (error) => {
  if (error) return console.log(`Error: ${error}`);
  connectDB();
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
