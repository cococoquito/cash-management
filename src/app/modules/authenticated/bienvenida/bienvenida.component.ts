import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/dtos/seguridad/autenticacion/usuario.dto';
import { SessionStoreUtil } from 'src/app/utilities/session-store.util';
import { TipoEventoConstant } from 'src/app/constants/tipo-evento.constant';
import { SpinnerState } from 'src/app/states/spinner.state';
import { RouterConstant } from 'src/app/constants/router.constant';

/**
 * Componente que respalda la pagina de bienvenida
 */
@Component({
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  /** Dto que contiene los datos del usuario autenticado */
  public usuario: UsuarioDTO;

  /**
   * @param spinnerState, se utiliza para simular el spinner
   * @param router, se utiliza para navegar en diferentes paginas
   */
  constructor(
    private spinnerState: SpinnerState,
    private router: Router) {}

  /**
   * Se debe inicializar las variables cuando se crea el component
   */
  ngOnInit(): void {
    this.usuario = SessionStoreUtil.auth(TipoEventoConstant.GET).usuario;
    this.spinnerState.displaySpinner();
    setTimeout(() => {
      this.spinnerState.hideSpinner();
    }, 100);
  }

  /**
   * Permite ir a la pagina de calendario
   */
  public goCalendario(): void {
    this.router.navigate([RouterConstant.NAVIGATE_CALENDARIO_SORTEO]);
  }

  /**
   * Permite ir a la pagina de loterias
   */
  public goLoterias(): void {
    this.router.navigate([RouterConstant.NAVIGATE_LOTERIAS]);
  }

  /**
   * Permite ir a la pagina de configuracion de empresa
   */
  public goConfiguracionEmpresa(): void {
    this.router.navigate([RouterConstant.NAVIGATE_CONFIGURACION_EMPRESA]);
  }

  /**
   * Permite ir a la pagina de configuracion asociacion
   */
  public goConfiguracionAsociacion(): void {
    this.router.navigate([RouterConstant.NAVIGATE_CONFIGURACION_ASOCIACION]);
  }

  /**
   * Permite ir a la pagina de usuarios
   */
  public goUsuarios(): void {
    this.router.navigate([RouterConstant.NAVIGATE_USUARIOS]);
  }
}
