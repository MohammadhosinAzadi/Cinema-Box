import { Request, Response }  from "express"
import { createMovieService } from "../../Service/Movies/createMovieService"

export async function createMovieController(req: Request, res: Response) {
    return await createMovieService(req.body)
}