import { Rol } from "./rol";

export interface User {
    
    id: string
    name: string | undefined;
    password: string | undefined;
    email: string | undefined;
    createdAt: string | undefined;
    status: string | undefined;
    Rol: Rol | undefined;
}