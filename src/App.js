import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";
import ErrorHandler from "./components/ErrorHandler";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";

function App() {
  // const [isDark, setIsDark] = useState(false);

  // const handleIsDark = () => {
  //   setIsDark(!isDark);
  // };

  return (
    // <div className="App" data-theme={isDark ? "dark" : "light"}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <ErrorHandler>
          {/* <NavBar changeTheme={handleIsDark} /> */}
          <NavBar />

          <AppRouter />
        </ErrorHandler>
      </div>
    </ThemeProvider>
  );
}

export default App;
