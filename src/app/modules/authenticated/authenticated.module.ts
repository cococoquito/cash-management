import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './authenticated-routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShellModule } from '../shell/shell.module';
import { SharedModule } from '../shared/shared.module';
import { FirstPageComponent } from './first-page/first-page.component';

/**
 * Modulo que contiene todos los artefactos que el usuario
 * puede acceder despues de que se autentique en la app
 */
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    ShellModule,
    SharedModule
  ],
  declarations: [
    WelcomeComponent,
    FirstPageComponent
  ],
  providers: [
  ]
})
export class AuthenticatedModule { }
