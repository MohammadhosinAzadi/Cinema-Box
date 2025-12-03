import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { deleteTicketsRepo } from "../../Repositoy/Tickets/deleteTicketsRepo"

export async function deleteTicketsController(req: Request ,res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await deleteTicketsRepo(id);
        sendSuccess(res, HttpStatus.OK, "Tickets deleted successfully.", { result })
    } catch (err: any) {
        
    }
}