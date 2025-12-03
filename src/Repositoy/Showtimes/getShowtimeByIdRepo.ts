import { getQueryOne } from "../../Repositoy/baseRepository";

export const getShowtimesByIdRepo = async (id: number) => {
    const query = `SELECT * FROM showtimes WHERE id = ?`
  return getQueryOne(query, [id]);
};
