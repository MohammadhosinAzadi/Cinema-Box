import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { creteShowtimesService } from "../../Service/Showtimes/creteShowtimesService"
import { HttpStatus } from "../Response/httpStatus"

export async function createShowtimesController(req: Request, res: Response) {
    try {
        const result = await creteShowtimesService(req.body)
        sendSuccess(res, HttpStatus.CREATED, "Showtimes registered", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.BAD_REQUEST, err.message)
    }
}