import { createUserRepo } from "../../Repositoy/User/createUserReo";

export async function createUserService(userData: any) {
    return await createUserRepo(userData)
}