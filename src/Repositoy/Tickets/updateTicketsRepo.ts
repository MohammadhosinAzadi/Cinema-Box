import { runQuery } from "../../Repositoy/baseRepository";

export async function updateTicketsRepo(id: number, ticketsData: Partial<{ user_id: number; showtime_id: number; seat: string; }>) {
    const query = `
      UPDATE tickets SET
        user_id = COALESCE(?, user_id),
        showtime_id = COALESCE(?, showtime_id),
        seat = COALESCE(?, seat)
        WHERE id = ?
    `
    return runQuery(query,[ticketsData.user_id ?? null, ticketsData.showtime_id ?? null, ticketsData.seat ?? null, id]);
}
