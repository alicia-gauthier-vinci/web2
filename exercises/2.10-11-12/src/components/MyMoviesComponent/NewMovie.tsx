import { SyntheticEvent, useState } from "react";
import { Movie } from "../../types";
/** composant qui ajoute un nouveau movie à la liste de movies
 * il prend en paramètre une méthode addMovie déclarée dans l'app MovieListPage. 
*/

interface NewMovieProps {
  addMovie: (movie: Movie) => void;
}

const NewMovie = ({ addMovie }: NewMovieProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newMovie: Movie = {
      title,
      director,
      duration: parseInt(duration),
      image,
      description,
      budget: budget ? parseInt(budget) : undefined,
    };
    addMovie(newMovie);

    setTitle("");
    setDirector("");
    setDuration("");
    setImage("");
    setDescription("");
    setBudget("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label htmlFor="director">Director</label>
        <input value={director} onChange={(e) => setDirector(e.target.value)} required />

        <label htmlFor="duration">Duration</label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />

        <label htmlFor="image">Image</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />

        <label htmlFor="description">Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />

        <label htmlFor="budget">Budget</label>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default NewMovie;
