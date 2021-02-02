import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterConstant } from '../../constants/router.constant';
import { ShellComponent } from '../shell/shell/shell.component';
import { FirstPageComponent } from './first-page/first-page.component';

/**
 * Constante que contiene todos los routers que el usuario
 * puede acceder despues de que se autentique en la app
 */
export const ROUTES: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: RouterConstant.ROUTER_WELCOME,
        component: WelcomeComponent
      },
      {
        path: 'admin/componente-uno',
        component: FirstPageComponent
      }
    ]
  }
];
