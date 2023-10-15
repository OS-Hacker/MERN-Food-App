import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  orders: [],
  error: null,
};

const OrderSlice = createSlice({
  name: "order",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(placeOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(placeOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = [action.payload];
    });
    builder.addCase(placeOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const placeOrders = createAsyncThunk(
  "order/placeOrders",
  async (token, subTotal, ) => {
    // const login = getState().loginUser.user;
    // const cartItems = getState().cartData.cartProducts;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/placeOrders`,
        { token, subTotal }
      );
      if (data.success) {
        toast.success(data.msg);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      if (error?.response.data.msg) {
        toast.error(error?.response.data.msg);
      }
    }
  }
);

export default OrderSlice.reducer;
