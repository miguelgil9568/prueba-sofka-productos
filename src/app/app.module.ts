import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './productos/component/productos-financieros/listado/listado.component';
import { BusquedaComponent } from './productos/component/productos-financieros/busqueda/busqueda.component';
import { AgregarComponent } from './productos/component/productos-financieros/agregar/agregar.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './productos-financieros/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptorService} from "./util/token-interceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
