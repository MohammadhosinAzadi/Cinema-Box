import { Request, Response }  from "express"
import { getAllShowtimesService } from "../../Service/Showtimes/getAllShoetimesService"
import { sendSuccess, sendError } from "../Response/response"
import { HttpStatus } from "../Response/httpStatus"

export async function getAllShowtimesController(req: Request, res: Response) {
    try {
        const result = await getAllShowtimesService()
        sendSuccess(res, HttpStatus.OK, "Showtimes fetched successfully", { result })
    } catch (err: any) {
        sendError(res, HttpStatus.INTERNAL_ERROR, err.message)
    }  
}