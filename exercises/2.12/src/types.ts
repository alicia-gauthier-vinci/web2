interface Movie {
  id: number;
  title: string,
  director: string,
  duration: number,
  image?: string,
  description?: string,
  budget?: number
}

type NewMovie = Omit<Movie, "id">;

interface MovieContext {
  movies: Movie[];
  addMovie: (newmovie: Movie) => void;
}

export type { Movie, NewMovie, MovieContext };