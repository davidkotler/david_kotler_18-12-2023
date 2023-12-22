import { createSlice } from "@reduxjs/toolkit";

export const fivaDayForecastSlice = createSlice({
  name: "fivaDayForecast",
  initialState: {
    value: "",
  },

  reducers: {
    setFiveDayForecast: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFiveDayForecast } = fivaDayForecastSlice.actions;

export default fivaDayForecastSlice.reducer;
