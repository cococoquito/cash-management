import { Component, OnInit } from '@angular/core';
import { RouterConstant } from 'src/app/constants/router.constant';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/login/security.service';
import { AuthenticationResponseDTO } from 'src/app/dtos/security/authentication-response.dto';
import { SessionStorageUtil } from 'src/app/utilities/session-storage.util';
import { TypesEventsConstants } from 'src/app/constants/types-events.constants';

/**
 * Componente para la autenticacion del sistema
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ SecurityService ],
})
export class LoginComponent implements OnInit {

  /**
   * @param router, Router para la navegacion a la pagina bienvenida
   */
  constructor(
    private router: Router,
    private securityService: SecurityService) {}
  
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
        // se almacena los datos de la autenticacion en el session
        SessionStorageUtil.authentication(TypesEventsConstants.SET, auth);

        // se redirecciona a la pagina de welcome
        this.router.navigate([RouterConstant.NAVIGATE_WELCOME]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
