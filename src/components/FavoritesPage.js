import React, { useState } from "react";
import "../styles/favoritesPage.css";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [] // get favorite locations from storage
  );

  const handleDelete = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
                    Temperature: {favorite.temperature}°C
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="body1">
                    Weather: {favorite.weatherText}
                  </Typography>
                </CardContent>

                <DeleteIcon onClick={() => handleDelete(favorite.id)} />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
