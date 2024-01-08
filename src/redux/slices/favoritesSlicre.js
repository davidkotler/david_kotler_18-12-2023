import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [],
  },

  reducers: {
    setFavorites: (state, action) => {
      state.value = action.payload;
    },
    addToFavorites: (state, action) => {
      const newFavorite = action.payload;

      const isAlreadyInFavorites = state.value.some(
        (favorite) =>
          favorite.id === newFavorite.id ||
          favorite.locationName === newFavorite.locationName
      );

      if (isAlreadyInFavorites) {
        console.log("Item already in favorites");
      } else {
        state.value.push(newFavorite);

        console.log("Item added successfully!");
      }
    },
    deleteFavoriteById: (state, action) => {
      const favoriteIdToDelete = action.payload;
      console.log(state.value);
      state.value = state.value.filter(
        (favorite) => favorite.id !== favoriteIdToDelete
      );
    },
  },
});

export const { setFavorites, addToFavorites, deleteFavoriteById } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
