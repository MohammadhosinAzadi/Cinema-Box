import { Router } from "express";
import { deleteUserController } from "../Controller/User/deleteUserController"
import { createUserController } from "../Controller/User/createUserController"
import { getAllUserController } from "../Controller/User/getAllUserController"
import { updateUserController } from "../Controller/User/updateUserController"

const routes = Router();

routes.post("/signup", createUserController);
// routes.post("/login", loginUserController);
routes.get("/", getAllUserController);
routes.put("/:id", updateUserController);
routes.delete("/:id", deleteUserController);

export default routes