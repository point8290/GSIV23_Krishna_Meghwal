import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/movie";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", () => {
  api.get("/movie/upcoming").then((response) => {
    console.log(response);
    return response.data.results;
  });
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.payload;
    });
  },
});

export default movieSlice.reducer;
