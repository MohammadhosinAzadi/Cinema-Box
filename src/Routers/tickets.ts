import { Router } from "express";
import { asyncHandler } from "../Middleware/Flow/asyncHandler"
import { requireBodyFields } from "../Middleware/Validation/requireBodyFields"
import { requireBody } from "../Middleware/Validation/requireBody"
import { validateNumericParam } from "../Middleware/Validation/validateNumericParam"
import { sendSuccessResponse } from "../Middleware/Response/sendSuccessResponse"
import { createTicketsController } from "../Controller/Tickets/creatTicketsController"
import { getAllTicketsController } from "../Controller/Tickets/getAllTicketsController"
import { deleteTicketsController } from "../Controller/Tickets/deleteTicketsController"
import { updateTicketsController } from "../Controller/Tickets/updateTicketsController"

const routes = Router();

routes.post(
  "/",
  requireBody,
  requireBodyFields(["user_id", "showtime_id", "seat"]),
  asyncHandler(createTicketsController),
  sendSuccessResponse("Ticket booked successfully", 201)
);

routes.get(
  "/",
  asyncHandler(getAllTicketsController),
  sendSuccessResponse("Tickets fetched successfully", 200)
);

routes.put(
  "/:id",
  validateNumericParam("id"),
  requireBody,
  asyncHandler(updateTicketsController),
  sendSuccessResponse("Ticket updated successfully", 200)
);

routes.delete(
  "/:id",
  validateNumericParam("id"),
  asyncHandler(deleteTicketsController),
  sendSuccessResponse("Ticket deleted successfully", 200)
);

export default routes;
