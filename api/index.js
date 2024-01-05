import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routers/user.router.js";
import authRouter from "./routers/auth.router.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connet to the mongodb...");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// API  Router

app.use("/api/user", userRouter);
app.use("/api/auth",authRouter);
