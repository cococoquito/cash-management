import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterConstant } from '../../constants/router.constant';

/**
 * Constante que contiene todos los routers que el usuario
 * puede acceder despues de que se autentique en la app
 */
export const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: RouterConstant.ROUTER_WELCOME,
        component: WelcomeComponent
      }
    ]
  }
];
