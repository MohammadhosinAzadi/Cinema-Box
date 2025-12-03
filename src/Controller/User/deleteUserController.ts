import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { deleteUserService } from "../../Service/User/deleteUserService"

export async function deleteUserController(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await deleteUserService(id);
        sendSuccess(res, HttpStatus.OK, "User deleted successfully.", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}