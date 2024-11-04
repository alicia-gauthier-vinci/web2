import { Movie } from "../types";
import "./MovieCard.css"

interface MovieProps {
  movies: Movie[];
}

const MovieCard = ({movies}: MovieProps) => {
  return(
    <div className="movie-list">
      {movies.map((movie)=>(
        <div key={movie.title} className="movie-card">
        <h2> {movie.title} - {movie.director}</h2>
        <img src={movie.image} alt={movie.title} />
        <div className="movie-details">
          <p>{movie.duration} minutes</p>
          <p>{movie.description}</p>
          <p> Budget: {movie.budget} million</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;