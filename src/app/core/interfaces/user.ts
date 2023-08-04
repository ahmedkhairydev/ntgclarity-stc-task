import { UserRole } from "../enums/user-role";

export interface User {
    username: string;
    password: string;
    role: UserRole;
}