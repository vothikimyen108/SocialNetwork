import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationApi from "../api/notificationApi";

//noti
export const getNoti = createAsyncThunk(
  "noti/getNoti",
  async (params, thunlApi) => {
    const noti = await notificationApi.getAllNoti();
    return noti;
  },
);

//tạo ra uiSlice
const notificationSlice = createSlice({
  name: "noti",
  initialState: {
    noti: {},
    error: false,
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [getNoti.pending]: (state) => {
      state.loading = true;
    },
    [getNoti.rejected]: (state) => {
      state.loading = true;
      state.error = true;
    },
    [getNoti.fulfilled]: (state, action) => {
      state.loading = false;
      state.noti = action.payload;
    },
  },
});

export const uiActions = notificationSlice.actions;

export default notificationSlice;
