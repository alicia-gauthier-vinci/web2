import path from "node:path";
import { Movie, NewMovie } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    imageUrl: "https://example.com/inception.jpg",
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    budget: 63,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    imageUrl: "https://example.com/matrix.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://example.com/interstellar.jpg",
  },
];

function readAllMovies(minimumDuration?: number, title?: string): Movie[] {
  const films = parse(jsonDbPath, defaultMovies);

  let result = [...films];

  if (minimumDuration) {
    result = result.filter((movie) => {
      return movie.duration <= minimumDuration;
    });
  }
  if (title) {
    result = result.filter((movie) => {
      return movie.title.toLowerCase().startsWith(title);
    });
  }
  return result;
}

function readOneMovie(id: number): Movie | undefined {
  const films = parse(jsonDbPath, defaultMovies);

  const movie = films.find((movie) => movie.id === id);
  if (!movie) {
    return undefined;
  }
  return movie;
}

function createOneMovie(newMovie: NewMovie): Movie | undefined {
  const films = parse(jsonDbPath, defaultMovies);

  const existingMovie = films.find((movie) =>
    movie.title === newMovie.title &&
    movie.director === newMovie.director
  );

  if (existingMovie) {
    return undefined;
  }

  const nextId =
    films.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) + 1;

  const createMovie: Movie = {
    id: nextId,
    ...newMovie,
  };

  films.push(createMovie);
  serialize(jsonDbPath, films);

  return createMovie;
}

function deleteOneMovie(id: number): Movie | undefined {
  const films = parse(jsonDbPath, defaultMovies);
  const index = films.findIndex((movie) => movie.id === id);
  if (index === -1) {
    return undefined;
  }

  const deletedElements = films.splice(index, 1);

  serialize(jsonDbPath, films);
  return deletedElements[0];
}

function updateOneMovie(id: number, newMovie: Partial<NewMovie>): Movie | undefined {
  const films = parse(jsonDbPath, defaultMovies);

  const movie = films.find((movie) => movie.id === id);
  if (!movie) {
    return undefined;
  }

  if (newMovie.title) {
    movie.title = newMovie.title;
  }
  if (newMovie.director) {
    movie.director = newMovie.director;
  }
  if (newMovie.duration) {
    movie.duration = newMovie.duration;
  }
  if (newMovie.budget) {
    movie.budget = newMovie.budget;
  }
  if (newMovie.description) {
    movie.description = newMovie.description;
  }
  if (newMovie.imageUrl) {
    movie.imageUrl = newMovie.imageUrl;
  }

  serialize(jsonDbPath, films);

  return movie;
}

export {
  readAllMovies,
  readOneMovie,
  createOneMovie,
  deleteOneMovie,
  updateOneMovie,
};