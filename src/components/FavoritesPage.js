import React, { useState } from "react";
import "../styles/favoritesPage.css";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavoriteById } from "../redux/slices/favoritesSlicre";
import { convertToFahrenheit } from "../services/temperatureConverter";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.value);
  const temperatureType = useSelector((state) => state.temperatureType.value);

  // const [favorites, setFavorites] = useState(
  //   JSON.parse(localStorage.getItem("favorites")) || [] // get favorite locations from storage
  // );

  // const handleDelete = (id) => {
  //   const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);

  //   setFavorites(updatedFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  // };
  const handleDelete = (id) => {
    dispatch(deleteFavoriteById(id));
  };
  return (
    <div className="favoritersContainer">
      <div className="headerDiv">
        <h1 style={{ color: "#7400b8" }}>Your Favorites</h1>
      </div>

      {favorites.length === 0 ? (
        <p style={{ color: "#7400b8" }}>No favorites added yet.</p>
      ) : (
        <div className="cardsDisplay">
          {favorites.map((favorite, index) => (
            <Card key={index} className="favoritesCard">
              <CardContent className="favoritesCardContent">
                <CardContent>
                  <h2>{favorite.locationName}</h2>
                </CardContent>

                <CardContent>
                  <Typography variant="body1">
                    Temperature:{" "}
                    {temperatureType === "C"
                      ? `${favorite.temperature}°C`
                      : `${convertToFahrenheit(favorite.temperature)}°F`}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="body1">
                    Weather: {favorite.weatherText}
                  </Typography>
                </CardContent>

                <DeleteIcon
                  onClick={() => dispatch(deleteFavoriteById(favorite.id))}
                />
                {/* <DeleteIcon /> */}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
