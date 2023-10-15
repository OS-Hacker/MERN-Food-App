import express from "express";
import {
  SingleProductController,
  createProductController,
  deleteProductController,
  getProductController,
  updateProductController,
  upload,
} from "../controllers/ProductController.js";
import { isAdmin, requiredSignIn } from "../helper/ProtectAuth.js";

const ProductRoute = express.Router();

ProductRoute.get("/get-product", getProductController);
ProductRoute.get("/single-product/:id", SingleProductController);
ProductRoute.post(
  "/create-product",
  upload.single("image"),
  requiredSignIn,
  isAdmin,
  createProductController
);
ProductRoute.put(
  "/update-product/:id",
  upload.single("image"),
  requiredSignIn,
  isAdmin,
  updateProductController
);
ProductRoute.delete(
  "/delete-product/:id",
  requiredSignIn,
  isAdmin,
  deleteProductController
);

export default ProductRoute;
