import { runQuery } from "../baseRepository";

export const deleteShowtimesRepo = async (id: number) => {
    const query = `DELETE FROM showtimes WHERE id = ?`
    return runQuery(query, [id]);
};
