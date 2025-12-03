import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { createTicketsService } from "../../Service/Tickets/createTicketsService"

export async function createTicketsController(req: Request, res: Response) {
    try {
        const result = await createTicketsService(req.body)
        sendSuccess(res, HttpStatus.CREATED, "Tickets registered", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.BAD_REQUEST, err.message)
    }
}