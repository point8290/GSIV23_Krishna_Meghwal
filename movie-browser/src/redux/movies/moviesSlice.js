import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/movie";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const { fetchMovies } = movieSlice.actions;

export const getMovies = function () {
  return async (dispatch, getState) => {
    const response = await api.get("/movie/upcoming");

    const data = response.data.results;
    console.log(data);

    dispatch(fetchMovies(data));
  };
};
