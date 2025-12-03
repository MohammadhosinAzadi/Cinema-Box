import { Router } from "express";
import { createTicketsController } from "../Controller/Tickets/creatTicketsController"
import { getAllTicketsController } from "../Controller/Tickets/getAllTicketsController"
import { deleteTicketsController } from "../Controller/Tickets/deleteTicketsController"
import { updateTicketsController } from "../Controller/Tickets/updateTicketsController"

const routes = Router();

routes.post("/", createTicketsController);
routes.get("/", getAllTicketsController);
routes.get("/:id", updateTicketsController);
routes.delete("/:id", deleteTicketsController);

export default routes