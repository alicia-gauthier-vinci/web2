import { useState } from "react";

interface Movie {
  title: string;
  director: string;
  description: string
}

interface CinemaProps {
  name: string;
  movies: Movie[];
}
const Cinema = ({name, movies}: CinemaProps) => {
  const[movieClicked, setIsMovieClicked] = useState(false);

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li 
          key={index}
          onClick={() => setIsMovieClicked(!movieClicked)}
          >
            <strong>{movie.title}</strong> 
            - Réalisateur: {movie.director}
            {movieClicked ? <p>{movie.description}</p> : null }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;