import { TypesEventsConstants } from './../constants/types-events.constants';
import { AuthenticationResponseDTO } from '../dtos/security/authentication-response.dto';

/**
 * Clase utilitaria para la administracion del sessionstore
 */
export class SessionStorageUtil {

  /** Key que representa los datos de la autenticacion del usuario */
  private static readonly KEY_AUTENTICACION: string = 'AUTHENTICATION';

  /**
   * Metodo que permite administrar el DTO que contiene
   * los datos de inicio de sesion en el sistema
   */
  public static authentication(evento: TypesEventsConstants, auth?: TypesEventsConstants): AuthenticationResponseDTO {
    return this.implementEvent(evento, this.KEY_AUTENTICACION, auth);
  }

  /**
   * Metodo que permite limpiar todo el session-store
   */
  public static cleanAll(): void {
    sessionStorage.removeItem(this.KEY_AUTENTICACION);
  }

  /**
   * Metodo que permite implementar un evento solicitado
   *
   * @param evento , indica que tipo de evento es
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
