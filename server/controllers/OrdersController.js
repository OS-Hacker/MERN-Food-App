import express from "express";
import { v4 as uuidv4 } from "uuid";
import Stripe from "stripe";

// Secret key
const stripe = new Stripe(
  "sk_test_51NjwfhSJghV1TCVoDD0WsdMSHkFRdDBE73BxDF6o4rJaFlM6688RkASqsjvMhibYKYGoGViVRhIOviXEJFwOd2ux00WXdDRRgS"
);

const OrderRouter = express.Router();

OrderRouter.post("/placeOrders", async (req, res) => {
  const { token, subTotal, login, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("payment successfull");
    } else {
      res.send("payment Failed");
    }
  } catch (error) {
    console.log(error);
  }
});

export default OrderRouter;
