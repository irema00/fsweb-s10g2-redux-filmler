import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions.js";
import movies from "../data.js";

const initialState = {
  favorites: [movies[0]],
  favoritesVisible: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        favoritesVisible: !state.favoritesVisible,
      };
    case ADD_FAVORITE:
      const newState = {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
      return newState;
    case REMOVE_FAVORITE:
      const newFavorites = state.favorites.filter(
        (movie) => movie.id === action.payload
      );
      return { ...state, favorites: newFavorites };
    default:
      return state;
  }
};

export default reducer;
