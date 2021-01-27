import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AutenticacionAPIConstant } from 'src/app/constants/apis/seguridad/autenticacion-api.constant';
import { AutenticacionResponseDTO } from 'src/app/dtos/seguridad/autenticacion-response.dto';

/**
 * Clase que contiene los procesos de negocio para la autenticacion en el sistema
 */
@Injectable()
export class SeguridadService {

  /**
   * @param HTTP para hacer las peticiones a los servicios REST
   */
  constructor(private http: HttpClient) {}

  /**
   * Servicio que permite soportar el proceso de iniciar sesion
   *
   * @param credenciales, contiene las credenciales del USER
   * @return DTO con los datos inciales
   */
  public iniciarSesion(data: AutenticacionResponseDTO): Observable<AutenticacionResponseDTO> {
    return this.http.post<AutenticacionResponseDTO>(
      AutenticacionAPIConstant.URL_LOGIN,
      data
    );
  }
}
