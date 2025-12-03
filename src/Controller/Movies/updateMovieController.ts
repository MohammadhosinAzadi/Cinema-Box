import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { updateMovieService } from "../../Service/Movies/updateMovieService"

export async function updateMovieController(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await updateMovieService(id, req.body)
        sendSuccess(res, HttpStatus.OK, "Movie updated successfully.", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}