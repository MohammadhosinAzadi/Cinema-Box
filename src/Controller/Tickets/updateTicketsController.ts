import { Request, Response }  from "express"
import { updateTicketsService } from "../../Service/Tickets/updateTicketsService"

export async function updateTicketsController(req: Request, res: Response) {
    const id = Number(req.params.id)
    return await updateTicketsService(id, req.body);
}