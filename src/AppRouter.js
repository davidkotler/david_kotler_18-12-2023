import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/mainPage";
import FavoritesPage from "./components/FavoritesPage.js";
import ErrorPage from "./components/ErrorPage.js";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}
