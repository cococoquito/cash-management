/**
 * Clase constante que contiene todo los ROUTER y NAVIGATE del app
 */
export class RouterConstant {

  /** Router para el modulo del LOGIN */
  public static readonly ROUTER_LOGIN: string = 'login';

  /** Router que se utiliza cuando el user esta autenticado */
  public static readonly ROUTER_AUTHENTICATED: string = 'authenticated';

  /** Router para la pagina de BIENVENIDA*/
  public static readonly ROUTER_WELCOME: string = 'welcome';  

  /** Constante para navegar a la pagina de BIENVENIDA */
  public static readonly NAVIGATE_WELCOME: string = `/${RouterConstant.ROUTER_AUTHENTICATED}/${RouterConstant.ROUTER_WELCOME}`;  
}
