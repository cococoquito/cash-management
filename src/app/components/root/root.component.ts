import { Component } from '@angular/core';

/**
 * Componente de inicio de la aplicacion de cash management
 */
@Component({
  selector: 'app-root',
  template: '<app-spinner></app-spinner> <router-outlet></router-outlet>'
})
export class RootComponent {}
