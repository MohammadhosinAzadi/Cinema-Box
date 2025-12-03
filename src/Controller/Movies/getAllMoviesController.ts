import { Request, Response }  from "express"
import { getAllMoviesService } from "../../Service/Movies/getAllMoviesService"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"

export async function getAllMoviesController(req: Request, res: Response) {
    try {
        const result = await getAllMoviesService();
        sendSuccess(res, HttpStatus.OK, "Movies fetched successfully", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}