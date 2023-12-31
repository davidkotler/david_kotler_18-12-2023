import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import { convertToFahrenheit } from "../services/temperatureConverter";
import Typography from "@mui/joy/Typography";
import "../styles/currentDayDiv.css";
import { sunnyIcon, cloudyIcon, rainyIcon } from "../settings";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";
import { daysOfWeek } from "../settings";

export default function CurrentDayWeather({ locationId }) {
  const locationName = useSelector((state) => state.locationName.value);
  const updateTime = useSelector((state) => state.updateTime.value);
  const temperatureType = useSelector((state) => state.temperatureType.value);
  const currentDayDetails = useSelector(
    (state) => state.currentDayDetails.value
  );

  if (!currentDayDetails || currentDayDetails.length === 0) {
    return (
      <div>
        <h1>Data not available right now !</h1>
      </div>
    );
  }

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
      (favorite) =>
        favorite.id === locationId || favorite.locationName === locationName
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
              <h1>
                {temperatureType === "C"
                  ? `${currentDayDetails[0].Temperature.Metric.Value}°C`
                  : `${convertToFahrenheit(
                      currentDayDetails[0].Temperature.Metric.Value
                    )}°F`}
              </h1>
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
