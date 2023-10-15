import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Food from "../pages/Food";
import { GlobalStyle } from "../style/GlobalStyle";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Store } from "../redux-tollkit/Store";
import Cart from "../pages/Cart";

import UserPrivetRoute from "../components/UserPrivetRoute";
import AdminPrivetRoute from "../components/AdminPrivetRoute";
import AdminDeshbored from "../Admin/AdminDeshbored";
import Error from "../components/Error";
import Create_Product from "../Admin/Create_Product";
import ShowProduct from "../Admin/ShowProduct";
import Orders from "../Admin/Orders";
import UpdateProduct from "../components/UpdateProduct";
import UserList from "../Admin/UserList";
import Profile from "../User/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={Store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<Error />} />

            {/* Privet Routes for user */}
            <Route path="/Deshbored" element={<UserPrivetRoute />}>
              <Route path="user" element={<Profile />} />
              <Route path="orders" element={<Orders />} />
            </Route>

            {/* Privet Routes for admin */}
            <Route path="/Deshbored" element={<AdminPrivetRoute />}>
              <Route path="admin" element={<AdminDeshbored />} />
              <Route path="admin/create-product" element={<Create_Product />} />
              <Route path="admin/show-product" element={<ShowProduct />} />
              <Route
                path="admin/update-product/:id"
                element={<UpdateProduct />}
              />
              <Route path="admin/user-List" element={<UserList />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
      <Toaster />
      <GlobalStyle />
    </>
  );
};

export default App;
