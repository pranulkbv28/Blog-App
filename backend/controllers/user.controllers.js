import fieldValidation from "../utils/fieldsValidation.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";
import { cookieOptions } from "../constants.js";
import bycryptjs from "bcryptjs";

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateToken();

    return accessToken;
  } catch (error) {
    console.log("ERROR IN GENERATING TOKEN: ", error.message);
    return res
      .status(500)
      .json(new ApiError(500, `Internal Server Error: ${error.message}`));
  }
};

export const signupUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const validInputs = fieldValidation({ username, password });

    if (!validInputs) throw new ApiError(400, "Invalid Inputs!!");

    const existingUser = await User.findOne({ username });

    if (existingUser) throw new ApiError(400, "User already exists!!");

    // const hashedPassword = await bycryptjs.hash(password, 10);

    const newUser = await User.create({
      username,
      password,
      role: "user",
    });

    const accessToken = await generateToken(newUser._id);

    const user = await User.findById(newUser._id).select("-password");

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          {
            loggedInUser: user,
            accessToken: accessToken,
          },
          "User Signed Up Successfully"
        )
      );
  } catch (error) {
    console.log("ERROR IN SIGNING UP: ", error.message);
    return res
      .status(500)
      .json(new ApiError(500, `Internal Server Error: ${error.message}`));
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const validInputs = fieldValidation({ username, password });
    if (!validInputs) throw new ApiError(400, "Invalid Inputs!!");

    const user = await User.findOne({ username });
    if (!user) throw new ApiError(400, "User does not exist!!");
    // console.log("This is user pwd: ", password);

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) throw new ApiError(400, "Invalid Password!!");

    const accessToken = await generateToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          {
            loggedInUser,
            accessToken,
          },
          "User Logged In Successfully"
        )
      );
  } catch (error) {
    console.log("ERROR IN LOGGIN IN: ", error.message);
    return res
      .status(500)
      .json(new ApiError(500, `Internal Server Error: ${error.message}`));
  }
};

export const logoutUser = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("accessToken", cookieOptions)
      .json(new ApiResponse(200, {}, "User Logged Out Successfully"));
  } catch (error) {
    console.log("ERROR IN LOGGING OUT: ", error.message);
    return res
      .status(500)
      .json(new ApiError(500, `Internal Server Error: ${error.message}`));
  }
};
