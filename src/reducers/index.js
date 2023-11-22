import { combineReducers, legacy_createStore as createStore } from "redux";

import movieReducer from "./movieReducer";

const reducers = combineReducers({
  movie: movieReducer,
});
export const store = createStore(reducers);
export default reducers;
