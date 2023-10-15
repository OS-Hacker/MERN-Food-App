import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "../style/Button";
import {useDispatch} from 'react-redux'
import { placeOrders } from "../redux-tollkit/OrderActions";

const Checkout = ({ subtotal }) => {

  const Dispatch = useDispatch()

  const tokenHandler = (token) => {
    Dispatch(placeOrders(token,subtotal))
  };  

  return (
    <StripeCheckout
      amount={subtotal * 100}
      shippingAddress
      token={tokenHandler}
      // Publishable key
      stripeKey={
        "pk_test_51NjwfhSJghV1TCVo9kI1xKfs866zB6BZKr0pgIWIRyHHowtPqby9sDxmDFAj3JC9WzDpvKpzNlyoiXzywkWj3Ytj00e5YzrPUO"
      }
      currency="INR"
    >
      <Button className="w-100">Checkout</Button>
    </StripeCheckout>
  );
};

export default Checkout;
