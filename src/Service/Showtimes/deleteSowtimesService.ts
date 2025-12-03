import { deleteShowtimesRepo } from "../../Repositoy/Showtimes/deleteShowtimesRepo";

export async function deleteShowtimesService(id: number) {
    return await deleteShowtimesRepo(id)
}