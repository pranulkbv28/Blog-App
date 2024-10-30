import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/user.controllers.js";
import verifyJWT from "../middlewares/user.middleware.js";

const router = express.Router();

router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
