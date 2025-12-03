import { updateMovieRepo } from "../../Repositoy/Movies/updateMovieRepo";

export async function updateMovieService(id: number, movieData: Partial<{name: string; director: string; release_year: number; durtion: number;}>) {
    return await updateMovieRepo(id, movieData)
}