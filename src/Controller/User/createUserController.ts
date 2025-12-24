import { Request, Response }  from "express"
import { createUserService } from "../../Service/User/createUserService"

export async function createUserController(req: Request, res: Response) {
    return await createUserService(req.body)
}