import { getQuery } from "../../Repositoy/baseRepository";

export const getAllShowtimesRepo = async () => {
    const query = `SELECT * FROM showtimes`
    return getQuery(query);
};
