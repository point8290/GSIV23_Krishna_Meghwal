import {
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "./movieTypes";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const fetchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        movies: [],
      };
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default fetchMovieReducer;
