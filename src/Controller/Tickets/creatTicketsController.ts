import { Request, Response }  from "express"
import { createTicketsService } from "../../Service/Tickets/createTicketsService"

export async function createTicketsController(req: Request, res: Response) {
    return await createTicketsService(req.body)
}