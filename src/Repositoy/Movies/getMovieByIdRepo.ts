import { getQueryOne } from "../../Repositoy/baseRepository";

export const getMovieByIdRepo = async (id: number): Promise<any> => {
    const query = `SELECT * FROM movies WHERE id = ?`;
    return getQueryOne(query, [id]);
};