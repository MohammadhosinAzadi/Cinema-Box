import { updateShowtimesRepo } from "../../Repositoy/Showtimes/updateShowtimesRepo";

export async function updateShowtimesService(id: number, showtimesData: any) {
    return await updateShowtimesRepo(id, showtimesData);
}