import { getQuery } from "../../Repositoy/baseRepository";

export async function getAllTicketsRepo() {
    const query = `SELECT * FROM tickets`;
    return getQuery(query);
}
