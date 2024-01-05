import express from "express";
import { authController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/sing-up',authController);

export default router;