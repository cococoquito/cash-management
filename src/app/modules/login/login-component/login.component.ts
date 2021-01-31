import { Component, OnInit } from '@angular/core';
import { RouterConstant } from 'src/app/constants/router.constant';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/login/security.service';
import { AuthenticationResponseDTO } from 'src/app/dtos/security/authentication-response.dto';
import { ShellService } from 'src/app/services/shell/shell.service';

/**
 * Componente para la autenticacion del sistema
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ SecurityService ]
})
export class LoginComponent implements OnInit {

  /**
   * @param router, Router para la navegacion a la pagina bienvenida
   */
  constructor(
    private router: Router,
    private securityService: SecurityService,
    private shellService: ShellService) {}
  
  /**
   * Aca se debe inicializar las variables globales del LOGIN
   */
  ngOnInit() {
  }

  /**
   * Metodo que soporta el evento click del boton iniciar sesion
   */
  public iniciarSesion(): void {

    this.securityService.iniciarSesion(new AuthenticationResponseDTO()).subscribe(
      auth => {
        // se notifica que hay un nuevo inicio de sesion
        this.shellService.singIn(auth);

        // se redirecciona a la pagina de welcome
        this.router.navigate([RouterConstant.NAVIGATE_WELCOME]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
