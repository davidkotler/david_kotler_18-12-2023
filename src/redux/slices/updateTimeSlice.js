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

export const { setUpdateTime } = updateSlice.actions;

export default updateSlice.reducer;
