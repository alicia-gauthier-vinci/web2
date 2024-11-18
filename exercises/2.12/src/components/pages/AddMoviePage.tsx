import NewMovie from "../MyMoviesComponent/NewMovie";
import { MovieContext } from "../../types"
import { useOutletContext } from "react-router-dom";

const AddMoviePage = () => {
  const { addMovie }: MovieContext = useOutletContext();

  return(
    <NewMovie addMovie={addMovie} />
  );
};

export default AddMoviePage;