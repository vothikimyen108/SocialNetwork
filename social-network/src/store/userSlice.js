import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../api/useApi";
//cookies
import cookies from "react-cookies";

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunlApi) => {
    const currentUser = await userApi.getUser();
    return currentUser;
  },
);

const token = cookies.load("access-token");

//tạo ra uiSlice
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    error: false,
    loading: true,
    isLoggedIn: token ? true : false,
  },
  reducers: {
    logout(state) {
      //lưu vô cookie
      cookies.save("access-token", "");
      cookies.save("refresh_token", "");
      state.currentUser = {};
      state.loading = true;
      state.error = false;
      let token = cookies.load("access-token");
      token ? (state.isLoggedIn = true) : (state.isLoggedIn = false);
    },
  },
  extraReducers: {
    [getMe.pending]: (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    },
    [getMe.rejected]: (state) => {
      state.loading = true;
      state.error = true;
      state.isLoggedIn = false;
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const uiActions = userSlice.actions;

export default userSlice;
