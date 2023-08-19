import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movies/moviesSlice";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});

export default store;
