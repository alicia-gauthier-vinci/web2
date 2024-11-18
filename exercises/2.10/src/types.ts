interface Movie {
  title: string,
  director: string,
  duration: number,
  image?: string,
  description?: string,
  budget?: number
}

interface MovieContext {
  movies: Movie[];
  addMovie: (newmovie: Movie) => void;
}

export type { Movie, MovieContext };