import { Movie } from "../types";
import MovieList from "./MovieList";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({name, movies}: CinemaProps) => (
  <div>
    <h2>{name}</h2>
    <MovieList movies={movies}/>
  </div>
);

export default Cinema;