import { Request, Response }  from "express"
import { updateShowtimesService } from "../../Service/Showtimes/updateShowtimesService"

export async function updateShowtimesController(req: Request, res: Response) {
    const id = Number(req.params.id)
    return await updateShowtimesService(id, req.body)
}