import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app-routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectivePreloadService } from './services/transversal/selective-preload.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RootComponent } from './components/root/root.component';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { AuthenticationGuard } from './guards/authentication.guard';

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    SelectivePreloadService,
    AuthenticationGuard
  ],
  bootstrap: [ 
    RootComponent
  ]
})
export class AppModule { }
