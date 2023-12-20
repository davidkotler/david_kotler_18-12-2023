import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CardCover from "@mui/joy/CardCover";
import "../styles/fiveDayDisplayCard.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useSelector, useDispatch } from "react-redux";
import { daysOfWeek } from "../settings";

export default function WeatherDisplay({ apiResponse, locationName }) {
  // const locationName = useSelector((state) => state.locationName.value);
  // if (!apiResponse || apiResponse.length === 0) {
  //   //check if the response is ok or not
  //   return (
  //     <div>
  //       <h1>Data not available right now !</h1>
  //     </div>
  //   );
  // }

  const response = {
    Headline: {
      EffectiveDate: "2023-12-16T07:00:00+02:00",
      EffectiveEpochDate: 1702702800,
      Severity: 7,
      Text: "High clouds this weekend",
      Category: "",
      EndDate: null,
      EndEpochDate: null,
      MobileLink:
        "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?lang=en-us",
      Link: "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2023-12-13T07:00:00+02:00",
        EpochDate: 1702443600,
        Temperature: {
          Minimum: {
            Value: 57,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 68,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 14,
          IconPhrase: "Partly sunny w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us",
      },
      {
        Date: "2023-12-14T07:00:00+02:00",
        EpochDate: 1702530000,
        Temperature: {
          Minimum: {
            Value: 56,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 70,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: "Mostly clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us",
        Link: "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us",
      },
      {
        Date: "2023-12-15T07:00:00+02:00",
        EpochDate: 1702616400,
        Temperature: {
          Minimum: {
            Value: 58,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 71,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: "Mostly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us",
        Link: "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us",
      },
      {
        Date: "2023-12-16T07:00:00+02:00",
        EpochDate: 1702702800,
        Temperature: {
          Minimum: {
            Value: 57,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 73,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us",
        Link: "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us",
      },
      {
        Date: "2023-12-17T07:00:00+02:00",
        EpochDate: 1702789200,
        Temperature: {
          Minimum: {
            Value: 58,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 72,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&lang=en-us",
        Link: "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&lang=en-us",
      },
    ],
  };

  const dailyForecasts = response.DailyForecasts;
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
                {/* <WbSunnyIcon /> */}
                <h4>Day</h4>
                <Typography fontSize="lg" fontWeight="lg">
                  {forecast.Day.IconPhrase}
                </Typography>
              </div>
              <div className="innerRightCardDiv">
                {/* <BedtimeIcon /> */}
                <h4>Night</h4>
                <Typography fontSize="lg" fontWeight="lg">
                  {forecast.Night.IconPhrase}
                </Typography>
              </div>
            </div>
            <div className="lowestCardDiv">
              {forecast.Temperature.Minimum.Value}°F -{" "}
              {forecast.Temperature.Maximum.Value}°F
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
