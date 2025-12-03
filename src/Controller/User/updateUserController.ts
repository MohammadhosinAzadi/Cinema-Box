import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { updateUserService } from "../../Service/User/updateUserService"

export async function updateUserController(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await updateUserService(id, req.body)
        sendSuccess(res, HttpStatus.OK, "User updated successfully.", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}