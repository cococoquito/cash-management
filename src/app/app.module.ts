import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTES } from './app-routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectivePreload } from './services/transversal/selective-preload';

/**
 * Modulo principal de la aplicacion, contiene
 * todos los componentes y modulos de inicio
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: SelectivePreload }),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    SelectivePreload
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
