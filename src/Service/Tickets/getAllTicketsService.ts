import { getAllTicketsRepo } from "../../Repositoy/Tickets/getAllTicketsRepo";

export async function getAllTicketsService() {
    return await getAllTicketsRepo();
}