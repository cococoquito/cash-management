import { AppDomainConstant } from '../domains/app-domain.constant';

/**
 * Clase que contiene todas las constantes de la API para el modulo de seguridad
 */
export class AuthenticationAPIConstant {

  /** Nombre del REST para el modulo AUTENTICACION */
  static readonly AUTHENTICATION_API: string = 'seguridad/';

  /** URL del recurso para la autenticacion en el sistema */
  static readonly URL_LOGIN: string =
    AppDomainConstant.URI_GATEWAY +
    AuthenticationAPIConstant.AUTHENTICATION_API +
    'login';

  /** URL del recurso para consulta de los registros de pruebas */
  static readonly URL_GET_RECORDS_TEST: string =
    AppDomainConstant.URI_GATEWAY +
    'escrutinio/calendarioSorteo/consultarCalendario';    
}
