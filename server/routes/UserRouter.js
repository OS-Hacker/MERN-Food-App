import express from "express";
import {
  loginController,
  registerController,
  protectUserController,
  protectAdminController,
  getRegisterUserController,
  updateProfileController,
} from "../controllers/UserController.js";
import { isAdmin, requiredSignIn } from "../helper/ProtectAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerController);

userRouter.post("/login", loginController);

// get Register user
userRouter.get("/get-user", getRegisterUserController);

// profile update

// update-profile
userRouter.post("/update-user", requiredSignIn, updateProfileController);

// PROTECTED ROUTES

userRouter.get("/protect-user", requiredSignIn, protectUserController);

userRouter.get(
  "/protect-admin",
  requiredSignIn,
  isAdmin,
  protectAdminController
);

export default userRouter;
