import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import PageTitle from "../PageTitle";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const { movies }: MovieContext = useOutletContext();
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle title=" My Movies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <p>
        <strong>
          My favorite movies
        </strong>
      </p>
      {movies.map((movie) => (
        <ul>
          <li onClick={() => navigate(`/moviePage/${movie.id}`)}>
            {movie.title}
          </li>
        </ul>
      ))}
    </div>
  );
};
export default HomePage;