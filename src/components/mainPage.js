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
import { useSelector, useDispatch } from "react-redux";

import { setUpdateTime } from "../redux/slices/updateTimeSlice";
import { setCurrentDayDetails } from "../redux/slices/currentDayDetails";

function MainPage() {
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [locationId, setLocationId] = useState(defaultAreaId);
  const [searchedLocationName, setSearchedLocationName] = useState("");
  const [matchedLocations, setMatchedLocations] = useState([]);
  const [generate, setGenerate] = useState(false);
  const [locationName, setLocationName] = useState("Tel Aviv");
  const dispatch = useDispatch();

  useEffect(() => {
    //get deafult area details
    async function getcurrentDay() {
      const details = await getCurrentDayWeather(locationId);
      // setCurrentDayDetails(details);
      dispatch(setCurrentDayDetails(details));
      dispatch(setUpdateTime(new Date().toLocaleTimeString()));

      const response = await getFiveDaysForCast(locationId); // CHECK THIS LINE LATER !!!!!!!!!!!!!

      setWeatherDetails(response);
    }
    getcurrentDay();
  }, [generate]);

  async function handleGetWeather(getForecast) {
    const matches = await getAutocompleteSearch(searchedLocationName);
    console.log(matches);
    if (matches) {
      const matchedNames = matches.map((location) => ({
        id: location.Key,
        name: location.LocalizedName,
      }));
      setMatchedLocations(matchedNames);
      setLocationId(matches[0].Key);
    }
    if (getForecast) {
      setGenerate(true); // trigger use effect
      const response = await getFiveDaysForCast(locationId);

      setWeatherDetails(response);
      setGenerate(false);
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
            setSearchedLocationName(newValue);

            handleGetWeather(false);
          }}
          onChange={(event, newValue) => {
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
            setLocationName(searchedLocationName);
            handleGetWeather(true);
          }}
        >
          Search
        </Button>
      </div>
      <div>
        <div className="midDiv">
          <CurrentDayWeather
            locationId={locationId}
            locationName={locationName}
          />
        </div>
        <div className="lowDiv">
          <WeatherDisplay
            locationId={locationId}
            apiResponse={weatherDetails}
            locationName={locationName}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
