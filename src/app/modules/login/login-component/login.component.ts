import { Component, OnInit } from '@angular/core';
import { RouterConstant } from 'src/app/constants/router.constant';
import { Router } from '@angular/router';

/**
 * Componente para la autenticacion del sistema
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * @param router, Router para la navegacion a la pagina bienvenida
   */
  constructor(private router: Router) {}
  
  /**
   * Aca se debe inicializar las variables globales del LOGIN
   */
  ngOnInit() {
  }

  /**
   * Metodo que soporta el evento click del boton iniciar sesion
   */
  public iniciarSesion(): void {

    // se redirecciona a la pagina de welcome
    this.router.navigate([RouterConstant.NAVIGATE_WELCOME]);
  }
}
