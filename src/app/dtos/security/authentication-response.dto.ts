import { MenuItemDTO } from '../menu/menu-item.dto';

/**
 * DTO para encapsular los datos que se envía cuando inician sesión ante al sistema
 */
export class AuthenticationResponseDTO {
    public id: number;
    public user: string;
    public clave: string;
    public name: string;
    public rol: string;
    public itemsMenu: Array<MenuItemDTO>;
}
