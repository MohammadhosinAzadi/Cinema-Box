import { runQuery } from "../../Repositoy/baseRepository";

export const updateUserRepo = async(id: number, userData: Partial<{name: string; phone: string; password: string;}>): Promise<void> => {
    const query = `
      UPDATE users
      SET
        name = COALESCE(?, name),
        phone = COALESCE(?, phone),
        password = COALESCE(?, password)
        WHERE id = ?
    `;
    return runQuery(query, [userData.name, userData.phone, userData.password])
}