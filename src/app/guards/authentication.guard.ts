import { Injectable } from '@angular/core';
import { RouterConstant } from './../constants/router.constant';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthenticationResponseDTO } from '../dtos/security/authentication-response.dto';
import { SessionStorageUtil } from '../utilities/session-storage.util';
import { TypesEventsConstants } from '../constants/types-events.constants';

/**
 * Se utiliza para los routers principales, donde se requiere
 * estar autenticado para poder acceder a los Modulos del negocio
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {

  /**
   * @param router, se utiliza para el redireccionamiento si
   * surge algun error en el filtro
   */
  constructor(private router: Router) {}

  /**
   * Metodo que permite validar si el usuario ya se encuentra autenticado
   * para los routers que esten senialado para este filtro
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isCorrectAuthentication = true;

    // se obtiene la URL de la pagina destino
    const url = state.url;

    // DTO que contiene los datos de la autenticacion
    const auth: AuthenticationResponseDTO = SessionStorageUtil.authentication(TypesEventsConstants.GET);

    // dependiendo del estado de la autenticacion se hace el llamado a los metodos
    if (auth && auth.id) {
      isCorrectAuthentication = this.canActivateUserLogin(url);
    } else {
      isCorrectAuthentication = this.canActivateUserNoLogin(url);
    }
    return isCorrectAuthentication;
  }

  /**
   * Cuando el usuario esta autenticado la URL NO puede ser
   * LOGIN, si la URL es LOGIN se redirecciona a la pagina
   * de bienvenida.
   */
  private canActivateUserLogin(url: string): boolean {
    if (url.includes(RouterConstant.ROUTER_LOGIN)) {
      return this.goTo(RouterConstant.NAVIGATE_WELCOME);
    }
    return true;
  }

  /**
   * Cuando el usuario NO esta autenticado la URL debe ser
   * LOGIN, si la URL no es LOGIN se redirecciona a la pagina
   * de INICIO DE SESION.
   */
  private canActivateUserNoLogin(url: string): boolean {
    if (!url.includes(RouterConstant.ROUTER_LOGIN)) {
      return this.goTo(RouterConstant.NAVIGATE_LOGIN);
    }
    return true;
  }

  /**
   * Metodo  que permite ir a un router especifico cuando surge
   * algun error en la seguridad del router
   */
  private goTo(url: string): boolean {
    this.router.navigate([url]);
    return false;
  }
}
