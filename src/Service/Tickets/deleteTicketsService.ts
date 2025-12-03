import { deleteTicketsRepo } from "../../Repositoy/Tickets/deleteTicketsRepo"

export async function  deleteTicketsService(id: number) {
    return await deleteTicketsRepo(id);
}