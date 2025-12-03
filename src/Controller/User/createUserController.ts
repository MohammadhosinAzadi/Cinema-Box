import { Request, Response }  from "express"
import { createUserService } from "../../Service/User/createUserService"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"

export async function createUserController(req: Request, res: Response) {
    try {
        const result = await createUserService(req.body)
        sendSuccess(res, HttpStatus.CREATED, "User registered", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.BAD_REQUEST, err.message)
    }
}