import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css'
import { Movie, NewMovie, MovieContext } from '../../types';
import { useNavigate } from "react-router-dom";


/** comme c'est l'app qui distribue le context, 
 * il faut lui passer les éléments nécessaire : 
 * le tableau movies avec ses données
 * la méthode addmovie avec sa définition
 * ceux ci seront appelé par les enfants grace au context
 */

function App() {

  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 1,
      title: "Spider-Man",
      director: "Sam Raimi",
      duration: 121,
      image: "https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg",
      description: "Peter Parker, an ordinary student, gains superpowers and battles the Green Goblin while balancing his personal life.",
      budget: 139
    },
    {
      id: 2,
      title: "One Piece Red",
      director: "Gorō Taniguchi",
      duration: 115,
      image: "https://m.media-amazon.com/images/M/MV5BZjY1MzBmNTgtMTYwZS00ODE0LWE1NDItNmJjNzYxNDEyY2YwXkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_.jpg",
    },
    {
      id: 3,
      title: "Avatar",
      director: "James Cameron",
      duration: 162,
      image: "https://image.tmdb.org/t/p/original/8Y7WrRK1iQHEX7UIftBeBMjPjWD.jpg",
      description: "On Pandora, a distant moon, Jake Sully encounters the Na'vi and discovers the beauty and dangers of their world.",
      budget: 237
    },
    {
      id: 4,
      title: "Transformers",
      director: "Michael Bay",
      duration: 144,
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stonemi",
      director: "Chris Columbus",
      duration: 152,
    },
  ]);

  const navigate = useNavigate();

  const addMovie = (newMovie: NewMovie) => {
    const newMovieWithId = { ...newMovie, id: nextMovieId(movies) };
    setMovies([...movies, newMovieWithId]);
    navigate("/movie-list");
  };

  const fullMovieContext: MovieContext = {
    addMovie,
    movies,
  };
  
  return (
    <>
      <Header image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h1>Tous sur les films</h1>
        <NavBar />
      </Header>

      <main className='page-content'>
        <Outlet context={fullMovieContext}/>
      </main>
      
      <Footer image="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© 2021 UGC Cinémas</p>
      </Footer>
    </>
  )
}

const nextMovieId = (movies: Movie[]) => {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
};


export default App
