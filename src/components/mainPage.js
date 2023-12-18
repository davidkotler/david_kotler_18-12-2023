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

function MainPage() {
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [currentDayDetails, setCurrentDayDetails] = useState("");
  const [locationId, setLocationId] = useState(defaultAreaId);
  const [searchedLocationName, setSearchedLocationName] = useState("Haifa");
  const [matchedLocations, setMatchedLocations] = useState([]);
  const [generate, setGenerate] = useState(false);

  const locationName = useSelector((state) => state.locationName.value);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   //get deafult area details
  //   async function getcurrentDay() {
  //     const details = await getCurrentDayWeather(locationId);
  //     setCurrentDayDetails(details);

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
    if (matches) {
      const matchedNames = matches.map((location) => {
        return { name: location.LocalizedName, id: location.Key };
      });
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
    // setLocationName(event.target.value);
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
          getOptionLabel={(location) => location.name}
          value={{ name: locationName }}
          onInputChange={(event, newValue) => {
            dispatch(setLocationName(newValue));
            handleGetWeather(false);
          }}
          onChange={(event, newValue) => {
            // handleGetWeather(true);
            setSearchedLocationName(newValue);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" />}
        />

        <Button
          sx={{ backgroundColor: "#7400b8" }}
          onClick={() => {
            handleGetWeather(true);
          }}
        >
          Search
        </Button>
      </div>
      <div className="midDiv">
        <CurrentDayWeather currentDayDetails={currentDayDetails} />
      </div>
      <div>
        <WeatherDisplay locationId={locationId} apiResponse={weatherDetails} />
      </div>
      <div>
        <h1>create by: David Kotler</h1>
      </div>
    </div>
  );
}

export default MainPage;
