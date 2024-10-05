import { Router } from "express";
import { Movie } from "../types";
import { NewMovie } from "../types";

const router = Router();

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

router.get("/", (req, res) => {
  const minimumDurationQuery = req.query["minimum-duration"];
  const titleQuery = req.query.title;

  let result = [...defaultMovies];

  if (minimumDurationQuery) {
    const minimum_duration = Number(minimumDurationQuery);
    if (isNaN(minimum_duration) || minimum_duration <= 0) {
      return res.status(400).json({ error: "Wrong minimum duration number" });
    }

    result = result.filter((movie) => {
      return movie.duration <= minimum_duration;
    });
  }

  if (titleQuery) {
    const titlePrefixNum = Number(titleQuery);
    if (!isNaN(titlePrefixNum)) {
      return res.status(400).json({ error: "Must be a string" });
    }
    const titleQueryString = String(titleQuery);
    const titlePrefix = titleQueryString.toLowerCase();
    result = result.filter((movie) => {
      return movie.title.toLowerCase().startsWith(titlePrefix);
    });
  }
  return res.json(result);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = defaultMovies.find((movie) => movie.id === id);
  if (!movie) {
    return res.sendStatus(404);
  }
  return res.json(movie);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("description" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string" ||
    !body.title.trim() ||
    !body.director.trim() ||
    !body.description.trim() ||
    !body.imageUrl.trim()
  ) {
    return res.sendStatus(400);
  }
  if (body.duration <= 0) {
    return res.status(400).json({ error: "Wrong minimum duration" });
  }
  if (body.budget <= 0) {
    return res.status(400).json({ error: "Wrong minimum budget" });
  }

  const movie = defaultMovies.find((movie) => movie.title === body.title && movie.director === body.director);
  if (movie) {
    return res.status(409).json({ error: "Movie already exists" });
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewMovie;

  const nextId =
    defaultMovies.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) + 1;

  const NewMovie: Movie = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  defaultMovies.push(NewMovie);
  return res.json(NewMovie);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = defaultMovies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = defaultMovies.splice(index, 1); // splice() returns an array of the deleted elements
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = defaultMovies.find((movie) => movie.id === id);
  if (!movie) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  if (("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))) {
    return res.status(400).json({ error: "duration must be >= 0 !" });
  }
  if (("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))) {
    return res.status(400).json({ error: "Budget must be > 0 !" });
  }

  const { title, director, duration, budget, description, imageUrl }: Partial<NewMovie> = body;

  if (title) {
    movie.title = title;
  }
  if (director) {
    movie.director = director;
  }
  if (duration) {
    movie.duration = duration;
  }
  if (budget) {
    movie.budget = budget;
  }
  if (description) {
    movie.description = description;
  }
  if (imageUrl) {
    movie.imageUrl = imageUrl;
  }

  return res.json(movie);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = defaultMovies.find((movie) => movie.id === id);

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    (typeof body.title !== "string" || !body.title.trim()) ||
    (typeof body.director !== "string" || !body.director.trim()) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  if ((typeof body.duration !== "number" || body.duration <= 0)) {
    return res.status(400).json({ error: "duration must be >= 0 !" });
  }
  if (("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))) {
    return res.status(400).json({ error: "Budget must be > 0 !" });
  }
  const { title, director, duration, budget, description, imageUrl }: Partial<NewMovie> = body as NewMovie;

  //modification
  if (movie) {
    movie.title = title;
    movie.director = director;
    movie.duration = duration;

    if (budget) {
      movie.budget = budget;
    }
    if (description) {
      movie.description = description;
    }
    if (imageUrl) {
      movie.imageUrl = imageUrl;
    }
    return res.json(movie);
  } else {
    //creation
    const NewMovie: Movie = {
      id: id,
      title,
      director,
      duration,
      budget: budget || undefined,
      description: description || undefined,
      imageUrl: imageUrl || undefined,
    };
  
    defaultMovies.push(NewMovie);
    return res.json(NewMovie);
  }
});

export default router;