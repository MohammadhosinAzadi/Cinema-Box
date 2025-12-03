import { runQuery } from "../../Repositoy/baseRepository";

export const deleteMovieRepo = async (id: number): Promise<void> => {
    const query = `DELETE FROM movies WHERE id = ?`;
    return runQuery(query, [id]);
};