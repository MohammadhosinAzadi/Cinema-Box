import { getAllMoviesRepo } from "../../Repositoy/Movies/getAllMoviesRepo";

export async function getAllUserService() {
    return await getAllMoviesRepo();
}