import { runQuery } from "../../Repositoy/baseRepository";

export const createShowtimesRepo = async (showtimesData: {movie_id: number; start_time: string; end_time: string; hall: string;}) => {
    const query =`INSERT INTO showtimes (movie_id, start_time, end_time, hall)VALUES (?, ?, ?, ?)`
    return runQuery(query,[showtimesData.movie_id, showtimesData.start_time, showtimesData.end_time, showtimesData.hall]);
};
