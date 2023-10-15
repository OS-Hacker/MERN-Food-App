import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartProduct: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartProduct.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartProduct[itemIndex].quantity += 1;

        toast.success(`${action.payload.title} Incresed Quantity`);
      } else {
        const tempQuntity = { ...action.payload, quantity: 1 };
        state.cartProduct.push(tempQuntity);

        toast.success(`${action.payload.title} add to cart`);
      }
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.cartProduct.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartProduct[itemIndex].quantity > 1) {
        state.cartProduct[itemIndex].quantity -= 1;

        toast.success(`${action.payload.title} Decreased Quantity`)
      }else if(state.cartProduct[itemIndex].quantity === 1){
         state.cartProduct = state.cartProduct.filter((item)=>item._id !== action.payload._id)

         toast.success('Product removed from cart')
      }
    },

    deleteCart: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (item) => item._id !== action.payload
      );

      toast.success(`Product removed from cart`);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, decreaseCart, deleteCart } = cartSlice.actions;
