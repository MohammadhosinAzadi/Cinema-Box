import { runQuery } from "../baseRepository";

export const updateShowtimesRepo = async (id: number, showtimesData: Partial<{movie_id: number; start_time: string; end_time: string; hall: string;}>) => {
    const query = `UPDATE showtimes SET movie_id = COALESCE(?, movie_id), start_time = COALESCE(?, start_time), end_time = COALESCE(?, end_time), hall = COALESCE(?, hall) WHERE id = ?`
    return runQuery(query, [showtimesData.movie_id ?? null,showtimesData.start_time ?? null,showtimesData.end_time ?? null,showtimesData.hall ?? null,id,]);
};
