import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";

// LOGIN THUNK
export const loginUser = createAsyncThunk(
  "auth/loginUser",

  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        formData
      );

      // STORE DATA IN LOCALSTOREGE
      if (res.data?.success) {
        localStorage.setItem("Auth", JSON.stringify(res.data));
        toast.success(res.data.msg);
        console.log(res);
        return res.data;
      }
    } catch (error) {
      if (error?.response.data.msg) {
        toast.error(error?.response.data.msg);
        return rejectWithValue(error?.response.data.msg);
      }
    }
  }
);

// REGISTER THUNK

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register`,
        formData
      );

      // STORE DATA IN LOCALSTOREGE
      if (data?.success) {
        toast.success(data.msg);
        localStorage.setItem("Auth", JSON.stringify(data));
        return data;
      }
    } catch (error) {
      if (error?.response.data.msg) {
        toast.error(error?.response.data.msg);
        return rejectWithValue(error?.response.data.msg);
      }
    }
  }
);





