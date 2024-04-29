import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import {ListadoComponent} from "./component/productos-financieros/listado/listado.component";
import {BusquedaComponent} from "./component/productos-financieros/busqueda/busqueda.component";
import {AgregarComponent} from "./component/productos-financieros/agregar/agregar.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "../productos-financieros/dashboard/dashboard.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ListadoComponent,
    BusquedaComponent,
    AgregarComponent
  ],  
  imports: [
    CommonModule,
    RouterModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    ListadoComponent,
    BusquedaComponent,
    AgregarComponent
  ]
})
export class ProductosModule { }
