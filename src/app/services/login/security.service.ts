import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationResponseDTO } from 'src/app/dtos/security/authentication-response.dto';
import { AuthenticationAPIConstant } from 'src/app/constants/apis/security/authentication-api.constant';

/**
 * Clase que contiene los procesos de negocio para la autenticacion en el sistema
 */
@Injectable()
export class SecurityService {

  /**
   * @param HTTP para hacer las peticiones a los servicios REST
   */
  constructor(private http: HttpClient) {}

  /**
   * Servicio que permite soportar el proceso de iniciar sesion
   *
   * @param data, contiene las credenciales del USER
   * @return DTO con los datos inciales
   */
  public iniciarSesion(data: AuthenticationResponseDTO): Observable<AuthenticationResponseDTO> {
    return this.http.post<AuthenticationResponseDTO>(
      AuthenticationAPIConstant.URL_LOGIN,
      data
    );
  }
}
