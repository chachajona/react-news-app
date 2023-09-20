import themeSlice from "./themeSlice";
import alertSlice from "./alertSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    alert: alertSlice,
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;