import { runQueryWithId } from "../../Repositoy/baseRepository";

export const createUserRepo = async(userData: {name: string; phone: string; password: string;}): Promise<number> => {
    const query = `INSERT INTO users (name, phone, password)VALUES (?, ?, ?)`;
    return runQueryWithId(query, [userData.name, userData.phone, userData.password])
}