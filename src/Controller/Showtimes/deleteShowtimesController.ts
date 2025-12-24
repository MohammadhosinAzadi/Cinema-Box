import { Request, Response }  from "express"
import { deleteShowtimesService } from "../../Service/Showtimes/deleteSowtimesService";

export async function deleteShowtimesController(req: Request, res: Response) {
    const id = Number(req.params.id);
    return await deleteShowtimesService(id)
}