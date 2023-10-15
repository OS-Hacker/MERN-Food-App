import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/UserRouter.js";
import ProductRoute from "./routes/ProductRoutes.js";
import OrderRouter from "./controllers/OrdersController.js";
import cors from "cors";

const App = express();

// define dotenv
dotenv.config();

// mideleweare
App.use(express.json());
App.use(cors());

// define Routes
App.use(userRouter);
App.use(ProductRoute);
App.use(OrderRouter);

// define DB
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("db successfully connected")
);

App.use(express.static("public/images"));

// start server
App.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);

// Error Handler
App.use((error, req, res, next) => {
  const message = error.message || "Internal server Error";
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    msg: message,
  });
});
