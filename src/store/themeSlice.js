import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.theme || "dark",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const data = action.payload;
      state.theme = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;