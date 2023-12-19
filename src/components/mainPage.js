import React from "react";
import {
  getAutocompleteSearch,
  getFiveDaysForCast,
} from "../services/weatherApi";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import fetchAllData from "../api/api";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/topHeader.css";
import CurrentDayWeather from "./CurrentDayWeather";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { defaultAreaId } from "../settings";
import { getCurrentDayWeather } from "../services/weatherApi";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { setLocationName } from "../redux/slices/locationSlice";
import { setUpdateTime } from "../redux/slices/updateTimeSlice";
import { setCurrentDayDetails } from "../redux/slices/currentDayDetails";

function MainPage() {
  const [weatherDetails, setWeatherDetails] = useState([]);
  // const [currentDayDetails, setCurrentDayDetails] = useState("");
  const [locationId, setLocationId] = useState(defaultAreaId);
  const [searchedLocationName, setSearchedLocationName] = useState("");
  const [matchedLocations, setMatchedLocations] = useState([]);
  const [generate, setGenerate] = useState(false);
  const [locationName, setLocationName] = useState("Tel Aviv");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   //get deafult area details
  //   async function getcurrentDay() {
  //     const details = await getCurrentDayWeather(locationId);
  //     // setCurrentDayDetails(details);
  //     dispatch(setCurrentDayDetails(details));
  //     dispatch(setUpdateTime(new Date().toLocaleTimeString()));

  //     const response = await getFiveDaysForCast(locationId); // CHECK THIS LINE LATER !!!!!!!!!!!!!

  //     setWeatherDetails(response);
  //   }
  //   getcurrentDay();
  // }, [generate]);

  // const values = [
  //   {
  //     Version: 1,
  //     Key: "213181",
  //     Type: "City",
  //     Rank: 31,
  //     LocalizedName: "Haifa",
  //     Country: {
  //       ID: "IL",
  //       LocalizedName: "Israel",
  //     },
  //     AdministrativeArea: {
  //       ID: "HA",
  //       LocalizedName: "Haifa",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "2589281",
  //     Type: "City",
  //     Rank: 85,
  //     LocalizedName: "Haifang Township",
  //     Country: {
  //       ID: "CN",
  //       LocalizedName: "China",
  //     },
  //     AdministrativeArea: {
  //       ID: "SD",
  //       LocalizedName: "Shandong",
  //     },
  //   },
  // ];

  async function handleGetWeather(getForecast) {
    const matches = await getAutocompleteSearch(locationName);
    console.log(matches);
    if (matches) {
      const matchedNames = matches.map((location) => ({
        id: location.Key,
        name: location.LocalizedName,
      }));
      // const matchedNames = matches.map((location) => location.LocalizedName);
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

  const handleInputChange = (event) => {
    //handle & fetch all the locations that match the search

    dispatch(setLocationName(event.target.value));
  };
  //   console.log(locationName);
  //   // const matches = getAutocompleteSearch(locationName);
  //   const matches = values;
  //   const matchedNames = matches.map((location) => location.LocalizedName);
  //   setMatchedLocations(matchedNames);

  //   console.log(matchedNames);
  // };

  return (
    <div className="container">
      <div className="upperDiv" spacing={1} sx={{ width: 300 }}>
        <Autocomplete
          style={{ width: 300, marginTop: 13 }}
          id="controlled-demo"
          options={matchedLocations}
          getOptionLabel={(location) => (location.name ? location.name : "")}
          value={{ name: locationName }}
          onInputChange={(event, newValue) => {
            setLocationName(newValue);
            // dispatch(setLocationName(newValue));
            handleGetWeather(false);
          }}
          onChange={(event, newValue) => {
            //handleGetWeather(true);
            // dispatch(setLocationName(newValue));
            if (newValue) {
              setLocationName(newValue.name);
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
            // dispatch(setLocationName(searchedLocationName));

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
        <div>
          <WeatherDisplay
            locationId={locationId}
            apiResponse={weatherDetails}
            locationName={locationName}
          />
        </div>

        <h1>create by: David Kotler</h1>
      </div>
    </div>
  );
}

export default MainPage;
