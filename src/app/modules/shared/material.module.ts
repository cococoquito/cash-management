import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

/**
 * Modulo que contiene los modulos especificos
 * para trabajar con los componentes de angualar material
 */
@NgModule({
  imports: [
    MatStepperModule
  ],
  exports: [
    MatStepperModule
  ]
})
export class MaterialModule {}
