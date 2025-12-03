import { getQueryOne } from '../../Repositoy/baseRepository'

export const getUserByIdRepo = async (id: number): Promise<any> => {
    const query = `SELECT * FROM users WHERE id = ?`;
    return getQueryOne(query, [id])
}