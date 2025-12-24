import { Request, Response }  from "express"
import { getAllMoviesService } from "../../Service/Movies/getAllMoviesService"

export async function getAllMoviesController(req: Request, res: Response) {
    return await getAllMoviesService();
}