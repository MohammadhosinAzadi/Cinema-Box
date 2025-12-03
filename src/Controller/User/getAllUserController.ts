import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { getAllUserService } from "../../Service/User/getAllUserService";

export async function getAllUserController(req: Request, res: Response) {
    try {
        const result = await getAllUserService()
        sendSuccess(res, HttpStatus.OK, "User fetched successfully", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}