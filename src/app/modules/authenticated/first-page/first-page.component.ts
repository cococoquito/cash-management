import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationModel } from 'src/app/models/pagination-model';
import { SecurityService } from 'src/app/services/login/security.service';
import { CalendarioSorteoDTO } from 'src/app/dtos/security/calendario-sorteo.dto';
import { Table } from 'primeng/table';

@Component({
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  providers: [ SecurityService ]
})
export class FirstPageComponent implements OnInit {

  /** Modelo del paginador con los datos de los horarios */
  public paginador: PaginationModel;

  /** Se utiliza para resetear la tabla de horarios */
  @ViewChild('tblhorarios') tblhorarios: Table;  

  /**
   * @param securityService
   */
  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {
    this.init();
  }

  /**
   * Metodo que es invocado por el paginador de la tabla horarios
   */
  public paginar(): void {

    // se configura el paginador dado que puede cambiar el skip o rowsperpage
    const filtro = new CalendarioSorteoDTO();
    filtro.paginador = this.paginador.data;

    // se procede a consultar los horarios
    this.securityService.getHorarios(filtro).subscribe(
      (data) => {
        this.paginador.setRecords(data);
      },
      (error) => {
        console.log(error.error)
      }
    );
  }

  /**
   * Metodo que permite soportar el evento click del boton filtrar
   */
  public filtrar(): void {

    // se hace el backup de los datos del paginador esto por si hay errores
    const filtro = new CalendarioSorteoDTO(); 
    filtro.paginador = this.paginador.beforeFilter();

    // se consulta los horarios de acuerdo a los filtros ingresados
    this.securityService.getHorarios(filtro).subscribe(
      (data) => {
        // se configuran los horarios consultados
        this.paginador.filterSuccessful(this.tblhorarios, data);
      },
      (error) => {
        console.log(error.error)
      }
    );
  }

    /**
   * Metodo que es invocado al momento de la creacion
   * del componente, donde se procede a consultar los
   * datos iniciales requeridos de la funcionalidad
   */
  private init(): void {
    this.paginador = new PaginationModel(this);
  }
}
