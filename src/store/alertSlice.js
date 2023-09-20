import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alerts: [],
};
export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    createAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter((alert) => alert.id !== action.payload);
    }
  },
});

export const { createAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
