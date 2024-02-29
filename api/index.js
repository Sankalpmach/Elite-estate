import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
const uri = "mongodb+srv://sankalppatil619:wadProject@cluster0.qdjydoz.mongodb.net/WadProjectretryWrites=true&w=majority&appName=Cluster0"; //Make ur own cluster on mongodb
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to mongo congrates");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is running /");
});

app.use("/api/user", userRouter); //.use method to use external routes
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
