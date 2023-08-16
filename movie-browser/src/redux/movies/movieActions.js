import api from "../../api/movie";

import {
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "./movieTypes";

const fetchMovieRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
};

const fetchMovieSuccess = (movies) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movies,
  };
};

const fetchMovieError = (error) => {
  return {
    type: FETCH_MOVIE_ERROR,
    payload: error,
  };
};

const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMovieRequest());
    api
      .get("/movie")
      .then((response) => {
        dispatch(fetchMovieSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchMovieError(error));
      });
  };
};
export default fetchMovies;
