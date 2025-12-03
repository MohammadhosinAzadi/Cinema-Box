import { createTicketsRepo } from "../../Repositoy/Tickets/creatTicketsRepo";

export async function createTicketsService(ticketsData: any) {
    return await createTicketsRepo(ticketsData);
}