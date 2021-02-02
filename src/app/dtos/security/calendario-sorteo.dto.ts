import { MenuItemDTO } from '../menu/menu-item.dto';
import { PaginationDTO } from '../transversal/pagination.dto';

/**
 * DTO para encapsular los datos que se envía cuando inician sesión ante al sistema
 */
export class CalendarioSorteoDTO {
    public nombreLoteria: string;
    public dia: string;
    public nroSorteo: string;
    public horaSorteo: string;
    public paginador: PaginationDTO;
}
