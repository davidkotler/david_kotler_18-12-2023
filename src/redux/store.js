import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import updateReducer from "./slices/updateTimeSlice";
import currentDayDetailsReducer from "./slices/currentDayDetails";

export const store = configureStore({
  reducer: {
    locationName: locationReducer,
    updateTime: updateReducer,
    currentDayDetails: currentDayDetailsReducer,
  },
});
