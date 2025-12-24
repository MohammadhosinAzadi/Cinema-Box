import { Request, Response }  from "express"
import { getAllShowtimesService } from "../../Service/Showtimes/getAllShoetimesService"

export async function getAllShowtimesController(req: Request, res: Response) {
    return await getAllShowtimesService() 
}