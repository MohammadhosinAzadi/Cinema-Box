import { Router } from "express";
import { asyncHandler } from "../Middleware/Flow/asyncHandler"
import { requireBodyFields } from "../Middleware/Validation/requireBodyFields"
import { requireBody } from "../Middleware/Validation/requireBody"
import { validateNumericParam } from "../Middleware/Validation/validateNumericParam"
import { sendSuccessResponse } from "../Middleware/Response/sendSuccessResponse"
import { createShowtimesController } from "../Controller/Showtimes/createShowtimesController"
import { getAllShowtimesController } from "../Controller/Showtimes/getAllShowtimesController"
import { updateShowtimesController } from "../Controller/Showtimes/updateShowtimesController"
import { deleteShowtimesController } from "../Controller/Showtimes/deleteShowtimesController


const routes = Router();

routes.post(
  "/",
  requireBody,
  requireBodyFields(["movie_id", "start_time", "end_time", "hall"]),
  asyncHandler(createShowtimesController),
  sendSuccessResponse("Showtime created", 201)
);

routes.get(
  "/",
  asyncHandler(getAllShowtimesController),
  sendSuccessResponse("Showtimes fetched successfully", 200)
);

routes.put(
  "/:id",
  validateNumericParam("id"),
  requireBody,
  asyncHandler(updateShowtimesController),
  sendSuccessResponse("Showtime updated successfully", 200)
);

routes.delete(
  "/:id",
  validateNumericParam("id"),
  asyncHandler(deleteShowtimesController),
  sendSuccessResponse("Showtime deleted successfully", 200)
);

export default routes;
