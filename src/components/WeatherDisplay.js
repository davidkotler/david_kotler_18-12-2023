import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "../styles/fiveDayDisplayCard.css";
import { useSelector } from "react-redux";
import { daysOfWeek } from "../settings";
import convertToCelsius from "../services/temperatureConverter";

export default function WeatherDisplay() {
  const locationName = useSelector((state) => state.locationName.value);
  const apiResponse = useSelector((state) => state.fivaDayForecast.value);
  const temperatureType = useSelector((state) => state.temperatureType.value);
  if (!apiResponse || apiResponse.length === 0) {
    //check if the response is ok or not
    return (
      <div>
        <h1>Data not available right now !</h1>
      </div>
    );
  }

  const dailyForecasts = apiResponse.DailyForecasts;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {dailyForecasts.map((forecast, index) => (
        <div key={index}>
          <Card className="fiveDayDIsplayCard" sx={{ width: 250, height: 323 }}>
            <CardContent className="upperCardDiv">
              <h2>{locationName}</h2>
              <Typography>
                {daysOfWeek[new Date(forecast.Date).getDay()]}
              </Typography>
              <Typography level="body-sm">
                {new Date(forecast.Date).toLocaleDateString()}
              </Typography>
            </CardContent>
            <div className="lowerCardDiv">
              <div className="innerLeftCardDiv">
                <h4>Day</h4>
                <Typography fontSize="lg" fontWeight="lg">
                  {forecast.Day.IconPhrase}
                </Typography>
              </div>
              <div className="innerRightCardDiv">
                <h4>Night</h4>
                <Typography fontSize="lg" fontWeight="lg">
                  {forecast.Night.IconPhrase}
                </Typography>
              </div>
            </div>
            <div className="lowestCardDiv">
              {temperatureType === "C"
                ? `${convertToCelsius(
                    forecast.Temperature.Minimum.Value
                  )}°C - ${convertToCelsius(
                    forecast.Temperature.Maximum.Value
                  )}°C`
                : `${forecast.Temperature.Minimum.Value}°F - ${forecast.Temperature.Maximum.Value}°F`}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
