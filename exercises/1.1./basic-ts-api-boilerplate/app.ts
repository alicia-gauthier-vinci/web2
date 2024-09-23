import express from "express";

import usersRouter from "./routes/users";
import movieRouter from "./routes/movies";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/movies", movieRouter);

export default app;
