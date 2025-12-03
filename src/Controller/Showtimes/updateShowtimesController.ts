import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { updateShowtimesService } from "../../Service/Showtimes/updateShowtimesService"

export async function updateShowtimesController(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await updateShowtimesService(id, req.body)
        sendSuccess(res, HttpStatus.OK, "Showtime updated successfully.", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}