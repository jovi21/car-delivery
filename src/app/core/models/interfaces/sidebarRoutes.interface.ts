import { UserRoles } from "@core/models/enums/userRoles.enum"

export interface SidebarRoutesInterface {
    name: string,
    route: string,
    userRoles: Array<UserRoles>,
    icon: string
}




