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

  /** Router para la pagina de error cuando el usuario no tiene permisos */
  public static readonly ROUTER_DENIED: string = 'denied';
  
  /** Router para el modulo del PAGINAS DE ERRORES */
  public static readonly ROUTER_ERROR: string = 'error';  

  /** Constante para navegar a la pagina de BIENVENIDA */
  public static readonly NAVIGATE_WELCOME: string = `/${RouterConstant.ROUTER_AUTHENTICATED}/${RouterConstant.ROUTER_WELCOME}`;  
}
