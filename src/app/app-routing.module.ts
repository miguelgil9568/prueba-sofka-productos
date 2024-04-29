import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoComponent} from "./productos/component/productos-financieros/listado/listado.component";
import {BusquedaComponent} from "./productos/component/productos-financieros/busqueda/busqueda.component";
import {DashboardComponent} from "./productos-financieros/dashboard/dashboard.component";


const routes: Routes = [
  {
    path: 'app',
    component: DashboardComponent,
    loadChildren:() => import('src/app/productos/productos.module').then(m => m.ProductosModule)
  },
  {path: '**', redirectTo: '/app', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
