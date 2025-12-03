import { getAllShowtimesRepo } from "../../Repositoy/Showtimes/getAllShowtimesRepo";

export async function getAllShowtimesService() {
    return await getAllShowtimesRepo();
}