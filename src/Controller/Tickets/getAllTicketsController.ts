import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { getAllTicketsService } from "../../Service/Tickets/getAllTicketsService"

export async function getAllTicketsController(req: Request, res: Response) {
    try {
        const result = await getAllTicketsService();
        sendSuccess(res, HttpStatus.OK, "Tickets fetched successfully", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}