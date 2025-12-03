import { Request, Response }  from "express"
import { deleteMovieService } from "../../Service/Movies/deleteMovieService";
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"

export async function deleteMovieController(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const result = await deleteMovieService(id);
        sendSuccess(res, HttpStatus.OK, "Movie deleted successfully.", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}

