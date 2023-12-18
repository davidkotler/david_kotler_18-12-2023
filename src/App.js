import React, { useState } from "react";
import "./App.css";
import MainPage from "./components/mainPage";
import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div>
      <NavBar />
      {/* <MainPage /> */}

      <AppRouter />
    </div>
  );
}

export default App;
