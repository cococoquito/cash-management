import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/transversal/spinner.service';

/**
 * Componente para mostrar el Spinner cuando se hacen peticiones HTTP
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  /**
   * Constructor de la clase que soporta los eventos del spinner
   * @param spinnerService, service para la visualizacion del spinner
   */
  constructor(public spinnerService: SpinnerService) {}
}
