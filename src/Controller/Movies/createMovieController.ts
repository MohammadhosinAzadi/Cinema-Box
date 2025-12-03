import { Request, Response }  from "express"
import { createMovieService } from "../../Service/Movies/createMovieService"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
 
export async function createMovieController(req: Request, res: Response) {
    try {
        const result = await createMovieService(req.body)
        sendSuccess(res, HttpStatus.CREATED, "Movie registered", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.BAD_REQUEST, err.message)
    }
}