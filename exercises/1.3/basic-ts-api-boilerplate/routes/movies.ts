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
  if(!req.query["minimum-duration"]){
    return res.json(defaultMovies);
  }
  const minimum_duration = Number(req.query["minimum-duration"]);
  const filteredMovies = defaultMovies.filter((movie) => {
    return movie.duration <= minimum_duration;
  });
  return res.json(filteredMovies);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = defaultMovies.find((movie) => movie.id === id);
  if(!movie) {
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
  if(body.duration <= 0){
    return res.status(400).json({ error: "Wrong minimum duration"});
  }
  if(body.budget <= 0){
    return res.status(400).json({ error: "Wrong minimum budget"});
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

export default router;