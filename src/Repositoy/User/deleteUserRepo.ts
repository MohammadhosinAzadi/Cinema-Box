import { runQuery } from "../../Repositoy/baseRepository";

export const deleteUserRepo = async (id: number): Promise<any> => {
    const query = `SELECT * FROM users WHERE id = ?`;
    return runQuery(query, [id])
}