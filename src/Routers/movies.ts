import { Router } from "express";
import { asyncHandler } from "../Middleware/Flow/asyncHandler"
import { requireBodyFields } from "../Middleware/Validation/requireBodyFields"
import { requireBody } from "../Middleware/Validation/requireBody"
import { sendSuccessResponse } from "../Middleware/Response/sendSuccessResponse"
import { validateNumericParam } from "../Middleware/Validation/validateNumericParam"
import { createMovieController } from "../Controller/Movies/createMovieController"
import { getAllMoviesController } from "../Controller/Movies/getAllMoviesController"
import { updateMovieController } from "../Controller/Movies/updateMovieController"
import { deleteMovieController } from "../Controller/Movies/deleteMovieController"

const routes = Router();

routes.post(
  "/",
  requireBody,
  requireBodyFields(["name", "director", "release_year", "duration"]),
  asyncHandler(createMovieController),
  sendSuccessResponse("Movie created", 201)
);

routes.get(
  "/",
  asyncHandler(getAllMoviesController),
  sendSuccessResponse("Movies fetched successfully", 200)
);

routes.put(
  "/:id",
  validateNumericParam("id"),
  requireBody,
  asyncHandler(updateMovieController),
  sendSuccessResponse("Movie updated successfully", 200)
);

routes.delete(
  "/:id",
  validateNumericParam("id"),
  asyncHandler(deleteMovieController),
  sendSuccessResponse("Movie deleted successfully", 200)
);

export default routes;
