import { Router } from "express";
import { Movie } from "../types";

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

router.get("/", (_req, res) => {
  return res.json(defaultMovies);
});

export default router;