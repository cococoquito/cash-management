import { Component, OnInit } from '@angular/core';
import { AutenticacionRequestDTO } from 'src/app/dtos/seguridad/autenticacion/autenticacion-request.dto';
import { CommonComponent } from 'src/app/utilities/common.component';
import { ShellState } from 'src/app/states/shell/shell.state';
import { BienvenidaRequestDTO } from 'src/app/dtos/seguridad/bienvenida/bienvenida-request.dto';
import { SeguridadService } from '../seguridad.service';
import { MsjFrontConstant } from './../../../constants/messages-frontend.constant';
import { AdministracionService } from '../../administracion/administracion.service';
import { UsuariosDTO } from 'src/app/dtos/configuracion-usuario/usuarios.dto';
import { AutenticacionResponseDTO } from 'src/app/dtos/seguridad/autenticacion/autenticacion-response.dto';
import { TransversalConstant } from 'src/app/constants/transversal.constant';


/**
 * Componente para la autenticacion del sistema ADMIN
 */
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SeguridadService, AdministracionService],
})
export class LoginComponent extends CommonComponent implements OnInit {
  /** Se utiliza para capturar las credenciales del usuario */
  public credenciales: AutenticacionRequestDTO;

  /** Contiene el mensaje de error presentada en la autenticacion */
  public msjError: string;

  /** Contiene el mensaje de error presentada en la autenticacion */
  public esPrimeraVez = false;

  public actContrasena: string;
  public validarContrasena: string;
  public isGuardar = false;
  public errorContra;
  public idUsuario: number;
  public usuariosDTO: UsuariosDTO;
  public dataAutenticacion: AutenticacionResponseDTO;
  public request: BienvenidaRequestDTO;
  /**
   * @param shellState, se utiliza para notificar el inicio de sesion
   * @param SeguridadService, contiene los servicios para la autenticacion
   */
  constructor(
    private shellState: ShellState,
    private seguridadService: SeguridadService,
    private administracionService: AdministracionService
  ) {
    super();
  }

  /**
   * Aca se debe inicializar las variables globales del LOGIN
   */
  ngOnInit() {
    this.init();
  }

  /**
   * Metodo que soporta el evento click del boton iniciar sesion
   */
  public iniciarSesion(formLogin): void {
    // se valida la nulalidad de las credenciales
    if (
      this.credenciales &&
      this.credenciales.claveIngreso &&
      this.credenciales.usuarioIngreso
    ) {
      // se procede a iniciar sesion en el sistema
      this.seguridadService.iniciarSesion(this.credenciales).subscribe(
        (dataAutenticacion) => {
          this.dataAutenticacion = dataAutenticacion;
          // se procede a obtener lo datos de bienvenida de la app
          this.request = new BienvenidaRequestDTO();
          this.request.idUsuario = this.dataAutenticacion.usuario.idUsuario;
          this.request.idAplicacion = TransversalConstant.ID_APLICACION_BACKOFFICE;
          this.idUsuario = this.request.idUsuario;
          if (dataAutenticacion.usuario.primerIngreso === 1) {
            this.esPrimeraVez = true;
          } else {
            this.bienvenida(this.request, dataAutenticacion, formLogin);
          }
        },
        (error) => {
          this.showError(error, formLogin);
        }
      );
    }
  }

  bienvenida(request, dataAutenticacion, formLogin) {
    this.seguridadService.getDatosBienvenida(request).subscribe(
      (dataBienvenida) => {
        // se indica el shell que hay un nuevo inicio de sesion
        this.shellState.iniciarSesion(dataBienvenida, dataAutenticacion);
      },
      (error) => {
        this.showError(error, formLogin);
      }
    );
  }

  /**
   * Metodo que es ejecutado antes de invocar el metodo iniciar sesion
   */
  public beforeIniciarSesion(): boolean {
    this.msjError = null;
    return true;
  }

  /**
   * Metodo que permite inicializar las variables globales
   */
  private init(): void {
    this.credenciales = new AutenticacionRequestDTO();
  }

  /**
   * Metodo encargado Actualizar la contraseña
   */
  actualizarContra() {
    this.isGuardar = true;
    this.msjError = null;
    if (this.actContrasena === this.validarContrasena) {
      this.usuariosDTO = new UsuariosDTO();
      this.usuariosDTO.clave = this.actContrasena;
      this.usuariosDTO.idUsuario = this.idUsuario;
      this.administracionService.actContrasPrimerVez(this.usuariosDTO).subscribe(
        (dataActualizada) => {
          this.bienvenida(this.request, this.dataAutenticacion, '');
        },
        (error) => {
          this.msjError = this.showMensajeError(error);
        }
      );
    } else {
      this.msjError = MsjFrontConstant.ERROR_CONTRASENA_NO_IGUALES;
    }
  }
  /**
   * Metodo que permite mostrar el error al momento consumir una API
   */
  private showError(error, formLogin): void {
    this.msjError = this.showMensajeError(error);
    this.credenciales.claveIngreso = null;
    formLogin.submitted = false;
  }
}
