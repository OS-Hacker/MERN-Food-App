import { errorHandler } from "../ErrorHandler.js";
import { UserModule } from "../modules/User.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const registerController = async (req, res, next) => {
  try {
    const { fname, lname, email, password, address } = req.body;

    console.log(fname, lname, email, password, address);

    if (!fname || !lname || !email || !password || !address) {
      return next(errorHandler(400, "All Fildes Required"));
    }

    const existUser = await UserModule.findOne({ email });

    //  if same email user register

    if (existUser) {
      return next(errorHandler(400, "User Allready Exist"));
    }

    //  for privecy password hesh

    const heshedPass = await bcrypt.hash(password, 10);

    const user = await new UserModule({
      ...req.body,
      password: heshedPass,
    }).save();

    const token = JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      success: true,
      msg: "Registation Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//  SHOW REGESTER USER
export const getRegisterUserController = async (req, res) => {
  try {
    const user = await UserModule.find({});

    res.status(200).json({
      success: true,
      msg: "successfully get all users",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// LOGIN
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandler(400, "All Fildes Required"));
    }

    //   Login email match our register email or not

    const existUser = await UserModule.findOne({ email });

    if (!existUser) {
      return next(errorHandler(400, "Invalid Email & Password"));
    }

    //   Login Password match our register Password or not

    const camparePass = await bcrypt.compare(password, existUser.password);

    if (!camparePass) {
      return next(errorHandler(400, "Invalid Email & Password"));
    }

    //  user give token

    const token = JWT.sign({ _id: existUser._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      success: true,
      msg: "Login Successfully",
      user: {
        fname: existUser.fname,
        lname: existUser.lname,
        email: existUser.email,
        address: existUser.address,
        isAdmin: existUser.isAdmin,
        password: existUser.password,
        id: existUser._id,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// UPDATE PROFILE DATA
export const updateProfileController = async (req, res) => {
  try {
    const { fname, lname, email, address } = req.body;

    const user = await UserModule.findById(req.user._id);

    const updateUserProfile = await UserModule.findByIdAndUpdate(
      user._id,
      {
        fname: fname || user.fname,
        lname: lname || user.lname,
        email: email || user.email,
        address: address || user.address,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      msg: "Profile Successfully Updateed",
      updateUserProfile,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      msg: "Something Went Wrong Profile",
      error,
    });
  }
};

// USER PROTECT ROUTES

export const protectUserController = async (req, res, next) => {
  await res.status(200).json({ ok: true });
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// ADMIN PROTECT ROUTE

export const protectAdminController = async (req, res, next) => {
  await res.status(200).json({ ok: true });
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
};
