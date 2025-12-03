import { Router } from "express";
import { createMovieController } from "../Controller/Movies/createMovieController"
import { getAllMoviesController } from "../Controller/Movies/getAllMoviesController"
import { updateMovieController } from "../Controller/Movies/updateMovieController"
import { deleteMovieController } from "../Controller/Movies/deleteMovieController"

const routes = Router();

routes.post("/", createMovieController);
routes.get("/", getAllMoviesController);
routes.put("/:id", updateMovieController);
routes.delete("/:id", deleteMovieController);

export default routes