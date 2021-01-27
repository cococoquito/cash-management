import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

/**
 * Modulo que contiene los modulos especificos
 * para trabajar con los componentes de primeng
 */
@NgModule({
  imports: [
    TableModule
  ],
  exports: [
    TableModule
  ]
})
export class PrimengModule { }
