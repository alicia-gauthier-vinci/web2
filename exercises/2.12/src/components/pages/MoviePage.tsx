import { useMatch } from "react-router-dom";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MoviePage = () => {

  const { movies }: MovieContext = useOutletContext();
  const match = useMatch("/moviePage/:movieId");
  const movieId = match?.params.movieId;
  if (!movieId) return <p>Movie not found</p>;

  const movie = movies.find((movie) => movie.id.toString() === movieId);
  if (!movie) return <p>Movie not found</p>;
  return (
    <div>
      <h2>{movie.title} - {movie.director}</h2>
      <p>{movie.description}</p>
      <p>Duration : {movie.duration}</p>
      <p> Budget du film : {movie.budget}</p>
      {movie.image}
    </div>
  );
};

export default MoviePage;