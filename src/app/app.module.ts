import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app-routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectivePreloadService } from './services/transversal/selective-preload.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RootComponent } from './components/root/root.component';

/**
 * Modulo principal de la aplicacion, contiene
 * todos los componentes y modulos de inicio
 */
@NgModule({
  declarations: [
    RootComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: SelectivePreloadService }),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    SelectivePreloadService
  ],
  bootstrap: [ 
    RootComponent
  ]
})
export class AppModule { }
