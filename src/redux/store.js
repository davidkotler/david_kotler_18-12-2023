import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import updateReducer from "./slices/updateTimeSlice";
import currentDayDetailsReducer from "./slices/currentDayDetails";
import fiveDayForecastReducer from "./slices/fiveDayForecastSlice";
export const store = configureStore({
  reducer: {
    locationName: locationReducer,
    updateTime: updateReducer,
    currentDayDetails: currentDayDetailsReducer,
    fivaDayForecast: fiveDayForecastReducer,
  },
});
