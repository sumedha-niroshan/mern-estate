import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routers/user.router.js";


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connet to the mongodb...");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// API  Router

app.use('/', userRouter);
