import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import newsApi from "../api/newsApi";

//getList
export const listNews = createAsyncThunk(
  "news",
  async (data, { rejectWithValue }) => {
    try {
      const response = await newsApi.getListApi(data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

//tạo ra poSlice
const newsSlice = createSlice({
  name: "news",
  initialState: {
    listPo: [],
    pageSize: 0,
    rowCount: 0,
  },
  reducers: {},
  extraReducers: {
    [listNews.fulfilled]: (state, action) => {},
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
