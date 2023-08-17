import MovieCard from "../MovieCard/MovieCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movies/moviesSlice";

export const Main = (props) => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <>
      {movie && movie.loading && <h1> Loading ....</h1>}
      {movie && !movie.loading && movie.error ? <h1> {movie.error}</h1> : ""}
      {!movie.loading && movie.movies ? (
        <h1>
          {movie.movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </h1>
      ) : (
        ""
      )}
    </>
  );
};

export default Main;
