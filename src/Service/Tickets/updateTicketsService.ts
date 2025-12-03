import { updateTicketsRepo } from "../../Repositoy/Tickets/updateTicketsRepo"

export async function updateTicketsService(id: number, ticketsData: any) {
    return await updateTicketsRepo(id, ticketsData);
}