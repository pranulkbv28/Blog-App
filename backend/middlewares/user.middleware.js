import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) throw new ApiError(401, "Unauthorized request!!");

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedToken._id).select("-password");

    if (!user) throw new ApiError(401, "Invalid User Token!!");

    req.user = user;
    next();
  } catch (error) {
    console.log("ERROR IN VERIFYING JWT: ", error.message);
    return next(new ApiError(500, `Internal Server Error: ${error.message}`));
  }
};

export default verifyJWT;
