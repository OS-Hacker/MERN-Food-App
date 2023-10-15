import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice.jsx";
import ProdutSlice from "./ProdutSlice.jsx";
import cartSlice from "./CartSlice.jsx";
import OrderSlice from "./OrderActions.jsx";

export const Store = configureStore({
  reducer: {
    auth: authSlice,
    foodData: ProdutSlice,
    cartData: cartSlice,
    placeOrders:OrderSlice
  },
});

export default Store;
