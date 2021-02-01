import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { RouterConstant } from 'src/app/constants/router.constant';
import { DialogModel } from 'src/app/models/dialog.model';
import { AuthenticationResponseDTO } from 'src/app/dtos/security/authentication-response.dto';
import { TypesEventsConstants } from 'src/app/constants/types-events.constants';
import { SessionStorageUtil } from 'src/app/utilities/session-storage.util';
import { BreadCrumbService } from './bread-crumb.service';
import { MenuService } from './menu.service';
import { UserAccountService } from './user-account.service';
import { ScreenService } from './screen.service';
import { ContentComponent } from 'src/app/modules/shell/content/content.component';

/**
 * Se utiliza para administrar el estado del Shell de la aplicacion
 */
@Injectable({ providedIn: 'root' })
export class ShellService {

  /** Administra el estado de la pantalla del dispositivo */
  public screen: ScreenService;

  /** Administra el estado de la miga de pan */
  public breadCrumb: BreadCrumbService;

  /** Administra el estado del menu de la aplicacion */
  public menu: MenuService;

  /** Administra el estado de la cuenta de usuario */
  public userAccount: UserAccountService;

  /** Se utiliza para visualizar el modal timeout */
  public dialogTimeOut: DialogModel;

  /** cuenta regresiva para el timeout */
  public countdownIdle: string;

  /** Es el content componente */
  public contentComponent: ContentComponent;

  /**
   * @param router, se utiliza para ser notificado cuando el router cambia
   * @param idle, se utiliza para activar el timeout
   * @param keepalive, se utiliza para hacer ping en la conexion
   */
  constructor(
    private router: Router,
    private idle: Idle,
    private keepalive: Keepalive, ) {

    // Estado para notificar el tamanio de la pantalla
    this.screen = new ScreenService();

    // Estado para administrar la cuenta del usuario
    this.userAccount = new UserAccountService();

    // Estado para administar la miga de pan
    this.breadCrumb = new BreadCrumbService();

    // Se utiliza para administrar el estado del Menu
    this.menu = new MenuService(this.screen, this.breadCrumb, this.router);

    // Se configura el timeout
    this.initIdle();

    // Se inicia el time out si existe una autenticacion
    this.initTimeOut();
  }

  /**
   *
   * Metodo que soporta el evento iniciar sesion del login
   */
  public singIn(auth: AuthenticationResponseDTO): void {

    // se cambia el estado de la cuenta a sesion iniciada
    this.userAccount.changeStateAuthenticated(auth);

    // se construye el menu de la aplicacion
    this.menu.initMenu(auth.itemsMenu);

    // se inicia el timeout sesion
    this.idle.watch();

    // se redirecciona a la pagina de bienvenida
    this.router.navigate([RouterConstant.NAVIGATE_WELCOME]);
  }

  /**
   * Metodo que soporta el evento cerrar sesion del menu
   */
  public singOut(): void {

    // se cambia el estado de la cuenta a sesion cerrada
    this.userAccount.changeStateClosedSession();

    // se destruye el menu para limpiar memoria
    this.menu.destroyMenu();

    // se para el timeout sesion
    this.idle.stop();

    // se redirecciona al LOGIN
    this.router.navigate([RouterConstant.NAVIGATE_LOGIN]);
  }

  /**
   * Metodo que soporta el evento click del boton permanecer del modal timeout
   */
  public stay(): void {
    this.idle.watch();
    this.dialogTimeOut.closeDialog();
  }

  /**
   * Metodo que soporta el evento click del boton salir del modal timeout
   */
  public goOut(): void {
    this.singOut();
    this.dialogTimeOut.closeDialog();
  }

  /**
   * Metodo que permite configurar el timeout
   */
  private initIdle(): void {

    // se configura el tiempo del timeout por 15 minutos
    this.idle.setIdle(900);

    // se configura el timeout periodo
    this.idle.setTimeout(15);

    // establece las interrupciones predeterminadas, en este caso,
    // cosas como clics, desplazamientos, toques del documento
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // ping de conexion cada 15 segundos
    this.keepalive.interval(15);

    // se activa cuando dectecta algun action
    this.idle.onIdleEnd.subscribe(() => {
      this.idle.watch();
    });

    // se cierra sesion cuando se cumple timeout
    this.idle.onTimeout.subscribe(() => {
      this.goOut();
    });

    // se activa cuando se empieza la cuenta regresiva
    this.idle.onIdleStart.subscribe(() => {
       if (this.dialogTimeOut == null) {
        this.dialogTimeOut = new DialogModel();
       }
       this.dialogTimeOut.showDialog(null);
    });

    // cuenta regresiva para el timeout
    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.countdownIdle = countdown;
    });
  }

  /**
   * Metodo que permite configurar el timeOut cuando
   * existe una autenticacion en el session store
   */
  private initTimeOut() {
    const auth = SessionStorageUtil.authentication(TypesEventsConstants.GET);
    if (auth && auth.id) {
      this.idle.watch();
    }
  }
}
