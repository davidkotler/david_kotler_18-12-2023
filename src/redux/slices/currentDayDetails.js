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

// Action creators are generated for each case reducer function
export const { setCurrentDayDetails } = currentDayDetailsSlice.actions;

export default currentDayDetailsSlice.reducer;
