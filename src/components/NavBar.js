import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Switch from "@mui/joy/Switch";
import { Link } from "react-router-dom";

export default function NavBar({ changeTheme }) {
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
          <Switch onChange={changeTheme} />

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
