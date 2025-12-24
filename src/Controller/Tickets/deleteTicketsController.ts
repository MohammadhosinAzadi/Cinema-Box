import { Request, Response }  from "express"
import { deleteTicketsRepo } from "../../Repositoy/Tickets/deleteTicketsRepo"

export async function deleteTicketsController(req: Request ,res: Response) {
    const id = Number(req.params.id)
    return await deleteTicketsRepo(id);
}