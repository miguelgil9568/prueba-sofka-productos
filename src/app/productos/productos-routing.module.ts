import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './component/productos-financieros/listado/listado.component';
import { BusquedaComponent } from './component/productos-financieros/busqueda/busqueda.component';
import { AgregarComponent } from './component/productos-financieros/agregar/agregar.component';


const routes: Routes = [
  {
    path: '',
    component: ListadoComponent,
    pathMatch: 'full'
  },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'agregar/:id', component: AgregarComponent },
  {path: '**', redirectTo: 'app/', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
