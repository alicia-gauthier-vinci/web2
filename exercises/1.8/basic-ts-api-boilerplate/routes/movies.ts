import { Router } from "express";
import { NewMovie } from "../types";
import {
  createOneMovie,
  deleteOneMovie,
  readAllMovies,
  readOneMovie,
  updateOneMovie,
} from "../services/movies";

const router = Router();

router.get("/", (req, res) => {

  const minimumDurationQuery = req.query["minimum-duration"];
  const titleQuery = req.query.title;

  if (minimumDurationQuery) {
    const minimumDuration = Number(minimumDurationQuery);
    if (isNaN(minimumDuration) || minimumDuration <= 0) {
      return res.status(400).json({ error: "Wrong minimum duration number" });
    }
  }

  if (titleQuery) {
    if (!isNaN(Number(titleQuery))) {
      return res.status(400).json({ error: "Must be a string" });
    }
  }

  const movies = readAllMovies(minimumDurationQuery ? Number(minimumDurationQuery) : undefined, titleQuery ? String(titleQuery) : undefined);
  return res.json(movies);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = readOneMovie(id);
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

  const { title, director, duration, budget, description, imageUrl } = body as NewMovie;

  const newMovie = createOneMovie({ title, director, duration, budget, description, imageUrl });

  if (!newMovie) {
    return res.sendStatus(409).json({ errors: "Movie already exists" });
  }

  return res.json(newMovie);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletedMovie = deleteOneMovie(id);
  if (!deletedMovie) {
    return res.sendStatus(404);
  }
  return res.json(deletedMovie);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.sendStatus(400);
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

  const updatedMovie = updateOneMovie(id, {title, director, duration, budget, description, imageUrl});
  
  if(!updatedMovie){
    return res.sendStatus(400);
  }

  return res.json(updatedMovie);
});

export default router;