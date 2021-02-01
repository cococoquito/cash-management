import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstant } from './../../../constants/router.constant';
import { MenuItem } from 'primeng/api';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ShellService } from 'src/app/services/shell/shell.service';

/**
 * Es el Header del shell de la aplicacion, contiene el menu de las
 * configuraciones del usuario, cierre de sesion
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('icon-open-close', [
      state('icon-open-menu', style({ 'margin-left': '241px' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  /** Son los items a mostrar en el menu de user-settings */
  public items: MenuItem[];

  /**
   * @param shellService, se utiliza para mostrar/ocultar el menu
   * y validar el tamanio de la pantalla
   *
   * @param router, se utiliza para redireccionar a la pagina
   * de bienvenida
   */
  constructor(
    public shellService: ShellService,
    private router: Router) {}

  /**
   * Se construye el menu de configuracion de cuenta
   */
  ngOnInit() {
    this.buildItemsMenuUserAccount();
  }

  /**
   * Metodo que soporta el evento cerrar sesion del menu
   */
  public singOut(): void {
    this.shellService.singOut();
  }

  /**
   * Metodo que soporta el evento click del menu Pagina de inicio
   */
  public goToWelcomePage(): void {
    this.router.navigate([RouterConstant.NAVIGATE_WELCOME]);
  }

  /**
   * Metodo que permite construir los items del menu
   * de configuraciones para el Usuario
   */
  private buildItemsMenuUserAccount(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'fa fa-fw fa-home font-size-18 mr-1',
        command: (click) => this.goToWelcomePage()
      },
      {
        label: 'Configuración de Cuenta',
        icon: 'fa fa-fw fa-gear font-size-18 mr-1',
      },
      { label: 'Cerrar Sesión',
        icon: 'fa fa-fw fa-power-off font-size-18 mr-1',
        command: (click) => this.singOut()
      }
    ];
  }
}
