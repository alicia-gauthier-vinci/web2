import { useOutletContext } from "react-router-dom";
import NewMovie from "../MyMoviesComponent/NewMovie";
import { MovieContext } from "../../types"

const AddMoviePage = () => {
  const { addMovie }: MovieContext = useOutletContext();

  return(
    <NewMovie addMovie={addMovie} />
  );
};

export default AddMoviePage;