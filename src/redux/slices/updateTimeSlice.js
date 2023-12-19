import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
  name: "updateTime",
  initialState: {
    value: "",
  },

  reducers: {
    setUpdateTime: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUpdateTime } = updateSlice.actions;

export default updateSlice.reducer;
