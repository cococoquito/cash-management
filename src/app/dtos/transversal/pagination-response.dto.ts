/**
 * Clase que mapea los atributos del response al momento de
 * consultar los registros con su total a mostrar
 */
export class PaginationResponseDTO {

  /** son los registros consultados */
  public records: Array<any>;

  /** cantidad total de los registros */
  public totalRecordsNumber: number;
}
