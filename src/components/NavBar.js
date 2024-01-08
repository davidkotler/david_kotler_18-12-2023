import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTemperatureType } from "../redux/slices/temperatureTypeSlice";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import navBar from "../styles/navBar.css";
import clear_icon from "./Assets/clear.png";
import logo_icon from "./Assets/1-removebg-preview.png";
import Switch from "react-switch";

export default function NavBar({ changeTheme }) {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const temperatureType = useSelector((state) => state.temperatureType.value);

  const handleTemperatureChange = () => {
    if (temperatureType === "C") {
      setSelected(true);
      dispatch(setTemperatureType("F"));
    } else {
      setSelected(false);
      dispatch(setTemperatureType("C"));
    }
  };
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" sx={{ background: "#ffffff" }}>
    //     <Toolbar>
    //       <Typography
    //         variant="h6"
    //         component="div"
    //         sx={{ flexGrow: 1, color: "#7400b8" }}
    //       >
    //         Weather App
    //       </Typography>
    //       <ToggleButton
    //         value="check"
    //         selected={selected}
    //         onChange={handleTemperatureChange}
    //         sx={{ width: "24px", height: "10px" }}
    //       >
    //         <ThermostatAutoIcon sx={{ fontSize: "18px" }} />
    //       </ToggleButton>
    //       <Switch onChange={changeTheme} />

    //       <Button
    //         component={Link}
    //         to="/"
    //         color="inherit"
    //         sx={{ color: "#7400b8" }}
    //       >
    //         home
    //       </Button>
    //       <Button
    //         component={Link}
    //         to="/favorites"
    //         color="inherit"
    //         sx={{ color: "#7400b8" }}
    //       >
    //         favorites
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <nav className="nav-container">
      <div className="left-bar-div">
        <div className="nav-bar-icon">
          <img src={logo_icon}></img>
        </div>
        <div className="nav-title">Weather App</div>
      </div>

      <div className="current-day">
        <span className="nav-bar-day">Sunday</span>,{" "}
        <span className="nav-bar-date"> 12th december</span>
      </div>
      <div className="switch">
        <Switch onChange={changeTheme} />
      </div>
    </nav>
  );
}
