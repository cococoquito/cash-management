import { PaginationDTO } from '../dtos/transversal/pagination.dto';
import { PaginationResponseDTO } from '../dtos/transversal/pagination-response.dto';
import { PaginationConstant } from '../constants/pagination-constant';

/**
 * Clase que contiene el modelo del paginador, se debe utilizar
 * esta clase para las consultas masivas del sistema que se
 * muestran en un p-table
 */
export class PaginationModel {

  /** son los registros a visualizar por pantalla */
  public records: any;

  /** son los datos del paginador */
  public data: PaginationDTO;

  /** Es la instancia del componente que tiene el metodo paginar para ser invocado */
  public listener: any;

  /** Es el metodo a invocar cuando cambian la paginacion */
  public methodName: string;

  /** Es el nro de filas por paginas por default */
  public rowsDefault: number;

  /** son las opciones para el tamanio de cada pagina (10,20,30,40,50) */
  public rowsPerPageOptions: Array<number>;

  /** Es la parte inferior que se muestra del paginador (1-10 de 300) */
  public pageReport: string;

  /**
   * @param listener , Es la instancia del componente que
   * tiene el metodo filtrar para ser invocado
   * @param methodName, nombre del metodo a invocar cuando el
   * paginador cambia
   */
  constructor(listener: any, methodName?: string) {

    // se configura el listener y el nombre del metodo
    this.listener = listener;
    this.methodName = methodName;

    // se crea el DTO donde contiene los atributos del paginador
    this.data = this.initPaginationDTO();

    // se configura la cantidad de filas por default
    this.rowsDefault = +PaginationConstant.ROWS_PAGE_DEFAULT;

    // se configura las opciones que tiene el paginador
    this.rowsPerPageOptions = PaginationConstant.ROWS_PER_PAGE_OPTIONS;
  }

  /**
   * Este metodo es invocado cuando cambian la pagina o el select que
   * contiene la lista de opciones de cantidad de filas por pagina
   */
  public scrollerListener(event): void {

    // se obtiene skip y filas por paginas del paginador
    const first = event.first + '';
    const rows = event.rows + '';

    // se hace el llamado al paginar cuando pase alguno de los siguientes criterios
    // 1- cuando el usuario no seleccione la misma pagina
    // 2- cuando el usuario cambio el valor filas por paginas
    if (this.data.skip !== first || this.data.rowsPage !== rows) {

      // se configura el numero por paginas dado que puede llegar valores diferentes
      this.data.rowsPage = rows;

      // se configura el skip para consultar paginado
      this.data.skip = first;

      // se invoca el metodo paginar del listener
      if (this.methodName) {
        this.listener[this.methodName]();
      } else {
        this.listener.paginar();
      }

      // se configura el page report del paginador
      this.setPageReport();
    }
  }

  /**
   * Metodo que permite configurar lo registros consultados
   */
  public setRecords(response: PaginationResponseDTO): void {

    // si la cantidad de registro es nulo es porque se reinicio el paginador
    // se procede a configurar la cantidad total registros y sus registros
    this.records = response.records;
    if (!this.data.totalRecordsNumber) {
        this.data.totalRecordsNumber = response.totalRecordsNumber;
    }
  }

  /**
   * Metodo que se debe invocar antes de filtrar,
   * permite crear el backup de los datos del paginador
   */
  public beforeFilter(): PaginationDTO {
    const datosPagination = this.initPaginationDTO();
    datosPagination.rowsPage = this.data.rowsPage;
    return datosPagination;
  }

  /**
   * Metodo que se debe invocar cuando el filtro de busqueda
   * no presento ningun error, configurando los datos del
   * response y reiniciando la tabla
   */
  public filterSuccessful(table: any, response: PaginationResponseDTO): void {

    // se reinicia p-table
    if (table) {
      table.reset();
    }

    // se reinicia los datos del paginador, esto con el fin que se vea reflejado
    // en la vista los nuevos registros de acuerdo al nuevo filtro busqueda
    this.data.skip = PaginationConstant.SKIP_DEFAULT;
    this.data.totalRecordsNumber = null;
    this.records = null;

    // se configura la cantidad total con sus registros
    this.setRecords(response);

    // se configura el page report del paginador
    this.setPageReport();
  }

  /**
   * Metodo que permite crear una instancia de los datos del paginador
   */
  public initPaginationDTO(): PaginationDTO {
    const pagination = new PaginationDTO();
    pagination.rowsPage = PaginationConstant.ROWS_PAGE_DEFAULT;
    pagination.skip = PaginationConstant.SKIP_DEFAULT;
    pagination.totalRecordsNumber = null;
    return pagination;
  }

 /**
  * Permite configurar el page report que se muestra en el paginador
  */
  public setPageReport(): void {
    const first = this.data.skip === '0' ? '1' : +this.data.skip + 1;
    const total = (+this.data.skip) + (+this.data.rowsPage);
    const last = total > this.data.totalRecordsNumber ? this.data.totalRecordsNumber : total;
    this.pageReport = first + ' - ' + last + ' de ' + this.data.totalRecordsNumber;
  }
}
