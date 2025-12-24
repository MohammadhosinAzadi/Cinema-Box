import { Request, Response }  from "express"
import { updateMovieService } from "../../Service/Movies/updateMovieService"

export async function updateMovieController(req: Request, res: Response) {
    const id = Number(req.params.id)
    return await updateMovieService(id, req.body)
}