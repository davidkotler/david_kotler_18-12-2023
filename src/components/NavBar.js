import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/joy/Switch";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#ffffff" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#7400b8" }}
          >
            Weather App
          </Typography>
          <Switch />

          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ color: "#7400b8" }}
          >
            home
          </Button>
          <Button
            component={Link}
            to="/favorites"
            color="inherit"
            sx={{ color: "#7400b8" }}
          >
            favorites
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
