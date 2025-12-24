import { Request, Response }  from "express"
import { updateUserService } from "../../Service/User/updateUserService"

export async function updateUserController(req: Request, res: Response) {
    const id = Number(req.params.id)
    return await updateUserService(id, req.body)
}