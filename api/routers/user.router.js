import express from "express";
import { updateUser, deleteUser ,getUserListing } from "../controllers/user.controller.js";
import { verifyUser } from "../Utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.get("/listing/:id", verifyUser, getUserListing);

export default router;
