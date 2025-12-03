import { Router } from "express";
import  users  from "../Routers/users"
import movies from "../Routers/movies"
import showtimes from "../Routers/showtimes"
import tickets from "../Routers/tickets"

interface RouteConfig {
    path: string;
    router: Router;
}

export const Routers: RouteConfig[] = [
    { path: "/users", router: users },
    { path: "/movies", router: movies },
    { path: "/showtimes", router: showtimes },
    { path: "/tickets", router: tickets },
];