import { updateUserRepo } from "../../Repositoy/User/updateUserRepo";

export async function updateUserService(id: number, userData: any) {
    return await updateUserRepo(id, userData);
}