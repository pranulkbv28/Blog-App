import express from "express";
import ApiResponse from "../utils/ApiResponse.js";

const router = express.Router();

router.route("/testing").post((req, res) => {
  console.log("This is the body: ", req.body);

  return res.status(200).json(new ApiResponse(200, {}, "Test Route"));
});

export default router;
