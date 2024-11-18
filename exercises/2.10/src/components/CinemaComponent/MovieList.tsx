import { useState } from "react";
import { Movie } from "../../types";
/*composant qui prend une liste de films 
  et agis sur chaque film
  ce composant est util pour le composant Cinema*/
interface MovieListViewProps {
  movies: Movie[];
}
/*??? Pourquoi quand on clique sur un films, toutes les descriptions se mettent ???*/
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