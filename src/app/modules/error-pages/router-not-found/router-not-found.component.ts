import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstant } from '../../../constants/router.constant';

/**
 * Pagina de error cuando el usuario ingresa a una
 * ruta que no esta configurada en el sistema
 * router not found
 */
@Component({
  templateUrl: './router-not-found.component.html',
  styleUrls: ['./router-not-found.component.css']
})
export class RouterNotFoundComponent {

  /**
   * @param router, se utiliza para redireccionar a la pagina de inicio
   */
  constructor(private router: Router) {}

  /**
   * Metodo que soporta el evento de ir a la pagina de bienvenida
   */
  public goHome(): void {
    this.router.navigate([RouterConstant.NAVIGATE_WELCOME]);
  }
}
