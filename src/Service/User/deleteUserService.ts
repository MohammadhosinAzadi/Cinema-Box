import { deleteMovieRepo } from "../../Repositoy/Movies/deleteMovieRepo";

export async function deleteUserService(id: number) {
    return await deleteMovieRepo(id);
}