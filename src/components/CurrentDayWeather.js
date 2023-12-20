import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import "../styles/currentDayDiv.css";
import { sunnyIcon, cloudyIcon, rainyIcon } from "../settings";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import Alert from "@mui/material/Alert";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { daysOfWeek } from "../settings";

export default function CurrentDayWeather({ locationId, locationName }) {
  // const locationName = useSelector((state) => state.locationName.value);
  const updateTime = useSelector((state) => state.updateTime.value);
  // const currentDayDetails = useSelector(
  //   (state) => state.currentDayDetails.value
  // );

  // if (!currentDayDetails || currentDayDetails.length === 0) {
  //   /// ADD THIS WHEN FINISH !!! IT WORKS JUST MAKE AN API CALLS
  //   //check if the details not available
  //   return (
  //     <div>
  //       <h1>Data not available right now !</h1>
  //     </div>
  //   );
  // }

  const currentDayDetails = [
    {
      LocalObservationDateTime: "2023-12-14T17:32:00+02:00",
      EpochTime: 1702567920,
      WeatherText: "Partly sunny",
      WeatherIcon: 35,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: false,
      Temperature: {
        Metric: {
          Value: 20,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 68,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us",
      Link: "http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us",
    },
  ];

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const handleAddToFavorites = () => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const newFavorite = {
      id: locationId,
      locationName,
      temperature: currentDayDetails[0].Temperature.Metric.Value,
      weatherText: currentDayDetails[0].WeatherText,
    };

    const isAlreadyInFavorites = existingFavorites.some(
      (favorite) => favorite.id === locationId
    );

    if (isAlreadyInFavorites) {
      alert("Item already in favorites");
    } else {
      const updatedFavorites = [...existingFavorites, newFavorite];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("Item added succssesfully! ");
    }
  };

  const weatherText = currentDayDetails[0].WeatherText.toLowerCase();
  let weatherIcon;

  if (weatherText.includes("sun")) {
    weatherIcon = sunnyIcon;
  } else if (weatherText.includes("cloud")) {
    weatherIcon = cloudyIcon;
  } else if (weatherText.includes("rain")) {
    weatherIcon = rainyIcon;
  } else {
    weatherIcon = sunnyIcon;
  }
  return (
    <div className="currentDayDiv">
      <Card className="card" variant="solid" invertedColors>
        <CardContent className="leftInnerContent">
          <h1 style={{ color: "#6930c3" }}>{locationName}</h1>
          <Typography style={{ color: "#6930c3" }}>
            {
              daysOfWeek[
                new Date(currentDayDetails[0].LocalObservationDateTime).getDay()
              ]
            }
          </Typography>
          <Typography style={{ color: "#6930c3" }}>
            {new Date(
              currentDayDetails[0].LocalObservationDateTime
            ).toLocaleDateString()}
          </Typography>
          <Typography style={{ color: "#6930c3" }}>
            updated at: {updateTime}
          </Typography>
        </CardContent>
        <CardContent className="middleInnerContent">
          <h2 style={{ color: "#6930c3" }}>
            {currentDayDetails[0].WeatherText}
          </h2>
        </CardContent>
        <CardContent className="rightInnerContent">
          <Card className="innerCard" variant="solid">
            <CardContent orientation="horizontal">
              <Typography>{weatherIcon}</Typography>
            </CardContent>
            <CardContent
              sx={{
                marginBottom: 2,
              }}
            >
              <h1>{currentDayDetails[0].Temperature.Metric.Value}°C</h1>
            </CardContent>

            <CardActions>
              <Button onClick={handleAddToFavorites}>Add to favorites</Button>
            </CardActions>
          </Card>
        </CardContent>
        <StarIcon
          sx={{
            color: favorites.some((favorite) => favorite.id === locationId)
              ? "yellow"
              : "white",
            marginRight: "auto",
            marginTop: "5px",
            marginRight: "5px",
            stroke: "yellow",
            strokeWidth: 1,
            fontSize: 50,
          }}
        />
      </Card>
    </div>
  );
}
