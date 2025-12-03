import { Request, Response }  from "express"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"
import { deleteShowtimesService } from "../../Service/Showtimes/deleteSowtimesService";

export async function deleteShowtimesController(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const result = await deleteShowtimesService(id)
        sendSuccess(res, HttpStatus.OK, "Showtime deleted successfully.", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }
}