import MovieCard from "../MovieCard/MovieCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/moviesSlice";
import "./Main.css";
export const Main = (props) => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="movielist">
      {movie && movie.movies ? (
        <>
          {movie.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
