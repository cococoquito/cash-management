import { Component } from '@angular/core';
import { ShellService } from 'src/app/services/shell/shell.service';

/**
 * Miga de pan que se visualiza en el Shell de la aplicacion
 */
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  /**
   * @param shellService , se utiliza para obtener
   * los valores de la miga de pan
   */
  constructor(public shellService: ShellService) {}
}
