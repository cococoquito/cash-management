import { TypesEventsConstants } from './../constants/types-events.constants';
import { AuthenticationResponseDTO } from '../dtos/security/authentication-response.dto';
import { MenuItemDTO } from '../dtos/menu/menu-item.dto';

/**
 * Clase utilitaria para la administracion del sessionstore
 */
export class SessionStorageUtil {

  /** Key que representa los datos de la autenticacion del usuario */
  private static readonly KEY_AUTHENTICATION: string = 'AUTHENTICATION';

  /** Key que representa los datos del Menu */
  private static readonly KEY_MENU: string = 'MENU';  

  /**
   * Metodo que permite administrar el DTO que contiene
   * los datos de inicio de sesion en el sistema
   */
  public static authentication(event: TypesEventsConstants, auth?: TypesEventsConstants): AuthenticationResponseDTO {
    return this.implementEvent(event, this.KEY_AUTHENTICATION, auth);
  }

  /**
   * Metodo que permite administrar los items del menu
   */
  public static menu(event: TypesEventsConstants, items?: Array<MenuItemDTO>): Array<MenuItemDTO> {
    return this.implementEvent(event, this.KEY_MENU, items);
  }  

  /**
   * Metodo que permite limpiar todo el session-store
   */
  public static cleanAll(): void {
    sessionStorage.removeItem(this.KEY_AUTHENTICATION);
  }

  /**
   * Metodo que permite implementar un evento solicitado
   *
   * @param event , indica que tipo de evento es
   * @param key , identifica el key del local-store
   * @param dataUpdate , valor actualizar en el local, es opcional
   */
  private static implementEvent(event: TypesEventsConstants, key: string, dataUpdate?: any): any {

    // contiene el resultado a retornar, opcional
    let response = null;

    // se verifica que tipo de evento es solicitado
    switch (event) {

      // evento para OBTENER algun valor del local-store
      case TypesEventsConstants.GET: {
        const value = sessionStorage.getItem(key);
        if (value) {
          response = JSON.parse(value);
        }
        break;
      }

      // evento para DELETE algun valor del local-store
      case TypesEventsConstants.DELETE: {
        sessionStorage.removeItem(key);
        break;
      }

      // evento para SET algun valor del local-store
      case TypesEventsConstants.SET: {
        sessionStorage.setItem(key, JSON.stringify(dataUpdate));
        break;
      }
    }
    return response;
  }
}
