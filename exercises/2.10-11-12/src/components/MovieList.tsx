import { useState } from "react";
import { Movie } from "../types";

interface MovieListViewProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListViewProps) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  return (
    <div >
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <li onClick={() => setDescriptionVisible(!descriptionVisible)}>
          <p>
            <strong>{movie.title}</strong> - Réalisateur : {movie.director}
          </p>
          <p>{descriptionVisible ? <i>{movie.description}</i> : null}</p>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;