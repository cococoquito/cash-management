import { Component, OnInit } from '@angular/core';
import { RouterConstant } from 'src/app/constants/router.constant';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/services/login/seguridad.service';
import { AutenticacionResponseDTO } from 'src/app/dtos/seguridad/autenticacion-response.dto';

/**
 * Componente para la autenticacion del sistema
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ SeguridadService ],
})
export class LoginComponent implements OnInit {

  /**
   * @param router, Router para la navegacion a la pagina bienvenida
   */
  constructor(
    private router: Router,
    private seguridadService: SeguridadService) {}
  
  /**
   * Aca se debe inicializar las variables globales del LOGIN
   */
  ngOnInit() {
  }

  /**
   * Metodo que soporta el evento click del boton iniciar sesion
   */
  public iniciarSesion(): void {

    this.seguridadService.iniciarSesion(new AutenticacionResponseDTO()).subscribe(
      data => {
        // se redirecciona a la pagina de welcome
        this.router.navigate([RouterConstant.NAVIGATE_WELCOME]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
