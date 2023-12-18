import React, { useState } from "react";
import "../styles/favoritesPage.css";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import IconButton from "@mui/joy/IconButton";
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
        <h1>Your Favorites</h1>
      </div>

      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="cardsDisplay">
          {favorites.map((favorite, index) => (
            <Card key={index} className="favoritesCard">
              <CardContent className="favoritesCardContent">
                <h2>{favorite.locationName}</h2>
                <CardContent>
                  <Typography variant="body1">
                    Temperature: {favorite.temperature}°C
                  </Typography>
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
