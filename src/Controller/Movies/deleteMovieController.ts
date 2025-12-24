import { Request, Response }  from "express"
import { deleteMovieService } from "../../Service/Movies/deleteMovieService";

export async function deleteMovieController(req: Request, res: Response) {
    const id = Number(req.params.id);
    return await deleteMovieService(id);
}

