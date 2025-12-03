import { createMovieRepo } from "../../Repositoy/Movies/createMoviesRepo";

export async function createMovieService(moviesData: any) {
    return await createMovieRepo(moviesData)
}