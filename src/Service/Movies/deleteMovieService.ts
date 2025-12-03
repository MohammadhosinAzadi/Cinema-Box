import { deleteMovieRepo } from "../../Repositoy/Movies/deleteMovieRepo";

export async function deleteMovieService(id: number) {
    return await deleteMovieRepo(id);
}