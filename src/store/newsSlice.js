import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  latestNews: [],
};
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state, action) => {
      state.news = action.payload;
    },
    getLatestNews: (state, action) => {
      state.latestNews = action.payload;
    },
  },
});

export const { getNews, getLatestNews } = newsSlice.actions;
export default newsSlice.reducer;
