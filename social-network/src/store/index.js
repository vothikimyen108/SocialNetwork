import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import notificationSlice from "./notificationSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, noti: notificationSlice.reducer },
});

export default store;
