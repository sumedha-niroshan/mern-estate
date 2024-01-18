import express from "express";
import { signIn , signUp ,google } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post('/sing-up',signUp);
authRouter.post('/sing-in',signIn);
authRouter.post('/google', google)

export default authRouter;