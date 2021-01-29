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
}
