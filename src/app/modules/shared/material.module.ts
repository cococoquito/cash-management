import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';

/**
 * Modulo que contiene los modulos especificos
 * para trabajar con los componentes de angualar material
 */
@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatStepperModule
  ]
})
export class MaterialModule {}
