import { runQuery } from "../../Repositoy/baseRepository";

export async function deleteTicketsRepo(id: number) {
    const query = `DELETE FROM tickets WHERE id = ?`;
    return runQuery(query, [id]);
}
