import { ProductModule } from "../modules/Product.js";
import { errorHandler } from "../ErrorHandler.js";
import multer from "multer";

export const createProductController = async (req, res, next) => {
  try {
    const { title, desc, price, quantity, category, ratings } = req.body;

    if (!title) {
      return next(errorHandler(400, "title is required"));
    }
    if (!desc) {
      return next(errorHandler(400, "desc is required"));
    }
    if (!price) {
      return next(errorHandler(400, "price is required"));
    }
    if (!quantity) {
      return next(errorHandler(400, "quantity is required"));
    }
    if (!category) {
      return next(errorHandler(400, "category is required"));
    }
    if (!ratings) {
      return next(errorHandler(400, "ratings is required"));
    }

    console.log(req.file);

    const product = await new ProductModule({
      ...req.body,
      image: req.file.filename,
    }).save();

    res.status(201).send({
      success: true,
      msg: "producr successfully createed",
      product,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getProductController = async (req, res, next) => {
  try {
    const product = await ProductModule.find({});

    res.status(200).json({
      success: true,
      msg: "Products Successfully get",
      product,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const SingleProductController = async (req, res, next) => {
  try {
    const product = await ProductModule.findById(req.params.id);

    res.status(200).json({
      success: true,
      msg: "singleProduct Successfully get",
      product,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    const existUser = await ProductModule.findById(req.params.id);

    console.log(req.file);

    const updateData = {
      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,
      ratings: req.body.ratings,
    };

    if (req.file) {
      const image = req.file.filename;
      updateData.image = image;
    }

    const product = await ProductModule.findByIdAndUpdate(
      existUser,
      updateData ,
      { new: true }
    );

    res.status(200).json({
      success: true,
      msg: "Product Successfully Updated",
      product,
    });
  } catch (error) {
    console.log(error);
    // next(error);
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    await ProductModule.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      msg: "Product Successfully Deleted",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// multer image uplode

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

export const upload = multer({ storage: storage });
