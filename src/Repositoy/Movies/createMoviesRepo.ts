import { runQueryWithId } from "../../Repositoy/baseRepository";

export const createMovieRepo = async (moviesData: {name: string; director: string; release_year: number;durtion: number;}): Promise<number> => {
    const query = `INSERT INTO movies (name, director, release_year, durtion) VALUES (?, ?, ?, ?)`;
    return runQueryWithId(query,[moviesData.name, moviesData.director, moviesData.release_year, moviesData.durtion]);
};