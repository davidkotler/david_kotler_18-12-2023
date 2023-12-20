import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export const apiUrl = "http://dataservice.accuweather.com";
export const apiKey = "uGaxZEVwWDzY11HuXgT8LPfCpDDR3JYI";
// export const apiKey = "kUriycj9Nd4CxCKftcouKKGJdyHnulUd";
export const defaultAreaId = 215854;

export const sunnyIcon = (
  <WbSunnyIcon color="secondary" style={{ fontSize: 100, color: "yellow" }} />
);
export const cloudyIcon = (
  <CloudIcon color="primary" style={{ fontSize: 100, color: "white" }} />
);

export const rainyIcon = (
  <ThunderstormIcon color="primary" style={{ fontSize: 100, color: "white" }} />
);

export const backgroundImageUrl =
  "C:\\Users\\david_k\\Downloads\\coast-8308438_1280.jpg";

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
