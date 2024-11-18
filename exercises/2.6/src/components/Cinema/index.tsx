import { useState } from "react";

interface Movie {
  title: string;
  director: string;
  description: string;
}

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({ name, movies }: CinemaProps) => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState<number | null>(null);

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li
            key={index}
            onClick={() => setSelectedMovieIndex(selectedMovieIndex === index ? null : index)}
          >
            <strong>{movie.title}</strong> - Réalisateur: {movie.director}
            {selectedMovieIndex === index && <p>{movie.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;
