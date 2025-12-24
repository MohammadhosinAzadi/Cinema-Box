import { Request, Response }  from "express"
import { getAllUserService } from "../../Service/User/getAllUserService";

export async function getAllUserController(req: Request, res: Response) {
    return await getAllUserService()
}