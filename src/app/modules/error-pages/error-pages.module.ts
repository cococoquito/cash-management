import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterConstant } from '../../constants/router.constant';
import { RouterNotFoundComponent } from './router-not-found/router-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

/**
 * Modulo que contiene los componentes de la
 * paginas de errores tales como autorizacion o
 * una pagina que no coincide con ningun router
 */
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RouterNotFoundComponent
      },
      {
        path: RouterConstant.ROUTER_DENIED,
        component: AccessDeniedComponent
      }
    ]),
  ],
  declarations: [
    RouterNotFoundComponent,
    AccessDeniedComponent
  ]
})
export class ErrorPagesModule {}
