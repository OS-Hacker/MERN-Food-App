import JWT from "jsonwebtoken";
import { UserModule } from "../modules/User.js";

export const requiredSignIn = (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(402).send({
      success: false,
      msg: "Invalid Token",
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await UserModule.findById(req.user._id);
    if (user.isAdmin) {
      return next();
    } else {
      return res.status(400).json({
        success: false,
        msg: "YOU NOT ADMIN",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
