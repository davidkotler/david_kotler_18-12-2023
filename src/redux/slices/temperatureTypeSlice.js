import { createSlice } from "@reduxjs/toolkit";

export const temperatureTypeSlice = createSlice({
  name: "temperatureType",
  initialState: {
    value: "F", // default shown in celsius
  },

  reducers: {
    setTemperatureType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTemperatureType } = temperatureTypeSlice.actions;

export default temperatureTypeSlice.reducer;
