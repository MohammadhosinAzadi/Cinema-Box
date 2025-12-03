import { getQuery } from "../../Repositoy/baseRepository";

export const getAllMoviesRepo = async (): Promise<any[]> => {
    const query = `SELECT * FROM movies`;
    return getQuery(query);
};