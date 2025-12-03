import { getQuery } from "../../Repositoy/baseRepository";

export const getAllUsersRepo = async(): Promise<any[]> => {
    const query = `SELECT * FROM users`;
    return getQuery(query);
}