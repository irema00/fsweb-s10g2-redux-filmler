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
    default:
      return state;
  }
};

export default reducer;
