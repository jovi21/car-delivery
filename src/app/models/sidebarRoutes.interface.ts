import { UserRoles } from "src/app/models/userRoles.enum"

export interface SidebarRoutesInterface {
    name: string,
    route: string,
    userRoles: Array<UserRoles>,
    icon: string
}




