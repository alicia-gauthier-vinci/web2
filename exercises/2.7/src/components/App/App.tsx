import { useState } from 'react';
import { Movie } from '../../types';
import MovieList from '../Movie'
import NewMovie from '../NewMovie';
import './App.css'

function App() {

  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "Spider-Man",
      director: "Sam Raimi",
      duration: 121,
      image: "https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg",
      description: "Peter Parker, an ordinary student, gains superpowers and battles the Green Goblin while balancing his personal life.",
      budget: 139
    },
    {
      title: "One Piece Red",
      director: "Gorō Taniguchi",
      duration: 115,
      image: "https://m.media-amazon.com/images/M/MV5BZjY1MzBmNTgtMTYwZS00ODE0LWE1NDItNmJjNzYxNDEyY2YwXkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_.jpg",
    },
    {
      title: "Avatar",
      director: "James Cameron",
      duration: 162,
      image: "https://image.tmdb.org/t/p/original/8Y7WrRK1iQHEX7UIftBeBMjPjWD.jpg",
      description: "On Pandora, a distant moon, Jake Sully encounters the Na'vi and discovers the beauty and dangers of their world.",
      budget: 237
    },
    {
      title: "Transformers",
      director: "Michael Bay",
      duration: 144,
    },
    {
      title: "Harry Potter and the Sorcerer's Stonemi",
      director: "Chris Columbus",
      duration: 152,
    },
  ]);

  const addMovie = (newMovie: Movie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <>
      <MovieList movies={movies} />
      <NewMovie addMovie={addMovie} />
    </>
  )
}

export default App
