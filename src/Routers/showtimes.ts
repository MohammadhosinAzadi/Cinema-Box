import { Router } from "express";
import { createShowtimesController } from "../Controller/Showtimes/createShowtimesController"
import { getAllShowtimesController } from "../Controller/Showtimes/getAllShowtimesController"
import { updateShowtimesController } from "../Controller/Showtimes/updateShowtimesController"
import { deleteShowtimesController } from "../Controller/Showtimes/deleteShowtimesController"

const routes = Router();

routes.post("/", createShowtimesController);
routes.get("/", getAllShowtimesController);
routes.put("/:id", updateShowtimesController);
routes.delete("/:id", deleteShowtimesController);

export default routes