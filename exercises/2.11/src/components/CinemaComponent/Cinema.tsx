import { Movie } from "../../types";
import MovieList from "./MovieList";
//un Cinema prend un nom et une liste de films

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