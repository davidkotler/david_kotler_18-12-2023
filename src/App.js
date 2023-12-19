import React, { useState } from "react";
import "./App.css";
import MainPage from "./components/mainPage";
import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";
import ErrorHandler from "./components/ErrorHandler";
function App() {
  const [isDark, setIsDark] = useState(false);

  const handleIsDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <ErrorHandler>
        <NavBar changeTheme={handleIsDark} />
        {/* <MainPage /> */}

        <AppRouter />
      </ErrorHandler>
    </div>
  );
}

export default App;
