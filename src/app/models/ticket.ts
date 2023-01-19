import { User } from "./user";

export interface Ticket {
    id: string ;
    title?: string ;
    description: string ;
    createdAt: string ;
    status: string ;
    user: User ;
}
