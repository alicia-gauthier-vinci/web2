import { SyntheticEvent, useState } from "react";
import { Movie } from "../types";
import { Box, TextField, Button } from "@mui/material";

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
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        label='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required

      />
      <TextField
        label='director'
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <TextField
        label='duration'
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <TextField
        label='image'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        label='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label='budget'
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Movie
      </Button>
    </Box>
  );
};

export default NewMovie;
