import { getUserByIdRepo } from "../../Repositoy/User/getUserByIdRepo";

export async function getUserByIdService(id: number) {
    return await getUserByIdRepo(id);
}