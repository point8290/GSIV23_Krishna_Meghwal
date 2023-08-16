import { combineReducers } from "redux";
import fetchMovieReducer from "./movies/movieReducer";

const rootReducer = combineReducers({
  movie: fetchMovieReducer,
});

export default rootReducer;
