import { Request, Response }  from "express"
import { creteShowtimesService } from "../../Service/Showtimes/creteShowtimesService"

export async function createShowtimesController(req: Request, res: Response) {
    return await creteShowtimesService(req.body)
}