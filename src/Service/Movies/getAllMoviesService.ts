import { getAllMoviesRepo } from "../../Repositoy/Movies/getAllMoviesRepo";

export async function getAllMoviesService() {
    return await getAllMoviesRepo()
}