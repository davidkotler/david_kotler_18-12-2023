import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "locationName",
  initialState: {
    value: "Tel Aviv",
  },

  reducers: {
    setLocationName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocationName } = counterSlice.actions;

export default counterSlice.reducer;
