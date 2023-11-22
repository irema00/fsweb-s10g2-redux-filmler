import { combineReducers, legacy_createStore as createStore } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoritesReducer";

const reducers = combineReducers({
  movie: movieReducer,
  favorites: favoritesReducer,
});
export const store = createStore(reducers);
export default reducers;
