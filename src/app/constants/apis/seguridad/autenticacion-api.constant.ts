import { AppDomainConstant } from '../app-domain.constant';

/**
 * Clase que contiene todas las constantes de la API para el modulo de seguridad
 */
export class AutenticacionAPIConstant {

  /** Nombre del REST para el modulo AUTENTICACION */
  static readonly AUTENTICACION_API: string = 'seguridad/';

  /** URL del recurso para la autenticacion en el sistema */
  static readonly URL_LOGIN: string =
    AppDomainConstant.URI_GATEWAY +
    AutenticacionAPIConstant.AUTENTICACION_API +
    'login';
}
