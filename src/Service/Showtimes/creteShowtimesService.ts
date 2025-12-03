import { createShowtimesRepo } from "../../Repositoy/Showtimes/createShowtimesRepo";

export async function creteShowtimesService(showtimesData: any) {
    return await createShowtimesRepo(showtimesData);
}