import express from "express";
import { signIn , signUp } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post('/sing-up',signUp);
authRouter.post('/sing-in',signIn);

export default authRouter;