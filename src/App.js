import React, { useState } from "react";
import "./App.css";
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

        <AppRouter />
      </ErrorHandler>
    </div>
  );
}

export default App;
