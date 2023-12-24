import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export const apiUrl = "https://dataservice.accuweather.com";

export const apiKey = "kUriycj9Nd4CxCKftcouKKGJdyHnulUd";

export const defaultAreaId = 215854;

export const sunnyIcon = (
  <WbSunnyIcon color="secondary" style={{ fontSize: 100, color: "yellow" }} />
);
export const cloudyIcon = (
  <CloudIcon color="primary" style={{ fontSize: 100, color: "grey" }} />
);

export const rainyIcon = (
  <ThunderstormIcon color="primary" style={{ fontSize: 100, color: "grey" }} />
);

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
