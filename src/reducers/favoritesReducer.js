import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions.js";
import movies from "../data.js";

const initialState = {
  favorites: [],
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
      const isExisting = state.favorites.find(
        (movie) => movie.id === action.payload.id
      );
      if (isExisting) {
        return state;
      }
      const newState = {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
      return newState;
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
