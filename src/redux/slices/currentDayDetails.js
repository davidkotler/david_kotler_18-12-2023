import { createSlice } from "@reduxjs/toolkit";

export const currentDayDetailsSlice = createSlice({
  name: "currentDayDetails",
  initialState: {
    value: "",
  },

  reducers: {
    setCurrentDayDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentDayDetails } = currentDayDetailsSlice.actions;

export default currentDayDetailsSlice.reducer;
