import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { updateTicketsService } from "../../Service/Tickets/updateTicketsService"

export async function updateTicketsController(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await updateTicketsService(id, req.body);
        sendSuccess(res, HttpStatus.OK, "Tickets updated successfully.", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}