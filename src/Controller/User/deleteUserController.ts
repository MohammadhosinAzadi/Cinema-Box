import { Request, Response }  from "express"
import { deleteUserService } from "../../Service/User/deleteUserService"

export async function deleteUserController(req: Request, res: Response) {
    const id = Number(req.params.id)
    return await deleteUserService(id);
}