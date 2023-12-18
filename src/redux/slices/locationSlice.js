import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "locationName",
  initialState: {
    value: "haifa",
  },

  reducers: {
    setLocationName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocationName } = counterSlice.actions;

export default counterSlice.reducer;
