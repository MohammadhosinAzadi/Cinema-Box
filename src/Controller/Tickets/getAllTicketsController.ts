import { Request, Response }  from "express"
import { getAllTicketsService } from "../../Service/Tickets/getAllTicketsService"

export async function getAllTicketsController(req: Request, res: Response) {
    return await getAllTicketsService();
}