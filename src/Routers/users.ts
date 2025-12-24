import { Router } from "express";
import { asyncHandler } from "../Middleware/Flow/asyncHandler"
import { requireBodyFields } from "../Middleware/Validation/requireBodyFields"
import { requireBody } from "../Middleware/Validation/requireBody"
import { validateNumericParam } from "../Middleware/Validation/validateNumericParam"
import { sendSuccessResponse } from "../Middleware/Response/sendSuccessResponse"
import { deleteUserController } from "../Controller/User/deleteUserController"
import { createUserController } from "../Controller/User/createUserController"
import { getAllUserController } from "../Controller/User/getAllUserController"
import { updateUserController } from "../Controller/User/updateUserController"


const routes = Router();

routes.post(
  "/signup",
  requireBody,
  requireBodyFields(["name", "phone", "password"]),
  asyncHandler(createUserController),
  sendSuccessResponse("User registered successfully", 201)
);

routes.get(
  "/",
  asyncHandler(getAllUserController),
  sendSuccessResponse("Users fetched successfully", 200)
);

routes.put(
  "/:id",
  validateNumericParam("id"),
  requireBody,
  asyncHandler(updateUserController),
  sendSuccessResponse("User updated successfully", 200)
);

routes.delete(
  "/:id",
  validateNumericParam("id"),
  asyncHandler(deleteUserController),
  sendSuccessResponse("User deleted successfully", 200)
);

export default routes;
