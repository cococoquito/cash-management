/**
 * Se utiliza para administrar el estado de la miga de pan
 */
export class BreadCrumbService {

  /** Es el nombre del modulo donde pertenece la URL */
  public module: string;

  /** URL actual de la miga de pan */
  public url: string;

  /** Icono del modulo seleccionado */
  public icon: string;
}
