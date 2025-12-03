import { runQuery } from "../../Repositoy/baseRepository";

export async function createTicketsRepo(ticketsData: {user_id: number; showtime_id: number; seat: string }) {
    const query = `INSERT INTO tickets (user_id, showtime_id, seat) VALUES (?, ?, ?)`;
    return runQuery(query,[ticketsData.user_id, ticketsData.showtime_id, ticketsData.seat]);
}
