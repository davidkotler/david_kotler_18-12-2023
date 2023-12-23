import React from "react";
import {
  getAutocompleteSearch,
  getFiveDaysForCast,
} from "../services/weatherApi";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/topHeader.css";
import CurrentDayWeather from "./CurrentDayWeather";
import Button from "@mui/joy/Button";
import { defaultAreaId } from "../settings";
import { getCurrentDayWeather } from "../services/weatherApi";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { setUpdateTime } from "../redux/slices/updateTimeSlice";
import { setCurrentDayDetails } from "../redux/slices/currentDayDetails";
import { setLocationName } from "../redux/slices/locationSlice";
import { setFiveDayForecast } from "../redux/slices/fiveDayForecastSlice";

function MainPage() {
  // const [weatherDetails, setWeatherDetails] = useState([]);
  const [locationId, setLocationId] = useState(defaultAreaId);
  const [searchedLocationName, setSearchedLocationName] = useState("");
  const [matchedLocations, setMatchedLocations] = useState([]);
  // const [generate, setGenerate] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //get deafult area details
    async function getcurrentDay() {
      const details = await getCurrentDayWeather(locationId);

      dispatch(setCurrentDayDetails(details));
      dispatch(setUpdateTime(new Date().toLocaleTimeString()));

      const response = await getFiveDaysForCast(locationId);
      dispatch(setFiveDayForecast(response));
      // setWeatherDetails(response);
    }
    getcurrentDay();
  }, [dispatch, locationId]);

  async function handleGetWeather(getForecast, locationName) {
    const matches = await getAutocompleteSearch(locationName);
    console.log(matches, "matches");
    if (matches) {
      const matchedNames = matches.map((location) => ({
        id: location.Key,
        name: location.LocalizedName,
      }));
      setMatchedLocations(matchedNames);
    }
    if (getForecast) {
      setLocationId(matches[0].Key);
      // setGenerate(true); // trigger use effect
      // const response = await getFiveDaysForCast(locationId);
      // setWeatherDetails(response);
      // setGenerate(false);
    }
  }

  return (
    <div className="container">
      <div className="upperDiv" spacing={1} sx={{ width: 300 }}>
        <Autocomplete
          style={{ width: 300, marginTop: 13 }}
          id="controlled-demo"
          options={matchedLocations}
          getOptionLabel={(location) => (location.name ? location.name : "")}
          value={{ name: searchedLocationName }}
          onInputChange={(event, newValue) => {
            console.log(newValue, "input");
            setSearchedLocationName(newValue);

            handleGetWeather(false, newValue);
          }}
          onChange={(event, newValue) => {
            console.log(newValue, "change");
            if (newValue) {
              setSearchedLocationName(newValue.name);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Type to search..."
              variant="standard"
            />
          )}
        />

        <Button
          sx={{ backgroundColor: "#7400b8" }}
          onClick={() => {
            dispatch(setLocationName(searchedLocationName));
            handleGetWeather(true, searchedLocationName);
          }}
        >
          Search
        </Button>
      </div>
      <div>
        <div className="midDiv">
          <CurrentDayWeather locationId={locationId} />
        </div>
        <div className="lowDiv">
          <WeatherDisplay />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
