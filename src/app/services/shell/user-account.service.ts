import { AuthenticationResponseDTO } from 'src/app/dtos/security/authentication-response.dto';
import { SessionStorageUtil } from 'src/app/utilities/session-storage.util';
import { TypesEventsConstants } from 'src/app/constants/types-events.constants';

/**
 * Servicio para administrar la cuenta del usuario
 */
export class UserAccountService {

  /** Son los datos de la utenticacion */
  public auth: AuthenticationResponseDTO;

  /**
   * Cuando se carga la pagina se crea la instancia del
   * servicio de la cuenta del user, se debe tomar los datos
   * del session-store, dado que en este punto son nulos
   */
  constructor() {
    this.init();
  }

  /**
   * Metodo que es invocado del constructor de este servicio
   */
  private init(): void {
    this.auth = SessionStorageUtil.authentication(TypesEventsConstants.GET);
  }

  /**
   * Metodo que permite cambiar el estado a autenticado
   */
  public changeStateAuthenticated(auth: AuthenticationResponseDTO): void {

    // Se configura los datos de la autenticacion en el session-store
    SessionStorageUtil.authentication(TypesEventsConstants.SET, auth);

    // se configura los datos del usuario
    this.auth = auth;
  }

  /**
   * Metodo que permite cambiar el estado a sesion cerrada
   */
  public changeStateClosedSession(): void {

    // Se limpia todo los registros del local-store
    SessionStorageUtil.cleanAll();

    // Se limpia las variables globales para notificar los demas componentes
    this.auth = null;
  }
}
