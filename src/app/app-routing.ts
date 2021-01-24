import { Routes } from '@angular/router';
import { RouterConstant } from './constants/router.constant';

/**
 * Constante que contiene todos los router de cada modulo del
 * core de la aplicacion, esta constante es importado solamente
 * del modulo core o principal 'app.module.ts'
 */
export const ROUTES: Routes = [
  {
    path: RouterConstant.ROUTER_LOGIN,
    data: { preload: true },
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: RouterConstant.ROUTER_AUTENTICADO,
    data: { preload: true },
    loadChildren: () => import('./modules/authenticated/authenticated.module').then(m => m.AutenticadoModule)
  },
  {
    path: '',
    redirectTo: RouterConstant.ROUTER_LOGIN,
    pathMatch: 'full'
  }
];
