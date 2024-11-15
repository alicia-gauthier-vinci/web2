import MovieCard from '../MyMoviesComponent/MovieCard'
import { MovieContext } from "../../types"
import { useOutletContext } from "react-router-dom";

/* index.tsx du composant MovieCard 
  le composant prends une liste de movies et un setter pour pouvoir ajouter un movie*/

function MovieListPage() {

  const { movies }: MovieContext = useOutletContext();

  return (
    <>
      <MovieCard movies={movies} />
    </>
  )
}

export default MovieListPage
