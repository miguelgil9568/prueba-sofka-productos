import { Component, OnInit } from '@angular/core';
import {ProductosFinancierosService} from "../../../../services/productos-financieros.service";
import {ProductoFinanciero} from "../../../../share/interface/ProductoFinanciero";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  terminoBusqueda: string = '';
  
  listado: ProductoFinanciero[] = [];
  listadoAux: ProductoFinanciero[] = this.listado;
  constructor(private productosFinancierosService:ProductosFinancierosService, 
    private router: Router,
    //private dialogoService: DialogoConfirmacionService
  ) { }

  ngOnInit(): void {
    console.log('Inicio ListadoComponent');
    this.obtenerProductos();
   
  }

  seleccionarFila(fila: ProductoFinanciero) {
    this.router.navigate(['app/agregar/'+ fila.id]);
  }

  obtenerProductos(){
    this.productosFinancierosService.obtenerProductos().subscribe({
      next: (data)=>{
        if (this.terminoBusqueda) {
            // Filtra los datos según el término de búsqueda
          this.listado = data.filter((elemento) =>
            elemento.id.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
            elemento.name.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
            elemento.description.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) 
          );
        } else {
          this.listado = data;
        }
      },error :(error)=> {
        console.log(error);
        alert('Ocurrio un problema al obtener los productos');
      }
    });
  }

  datosFiltrados() {
    this.obtenerProductos();
  }

  eliminar(idProducto: string){

    // const mensaje = '¿Estás seguro de que quieres realizar esta acción?';
    // const confirmacion$ = this.dialogoService.abrirDialogo(mensaje);

    // // Suscríbete al resultado de la confirmación
    // confirmacion$.subscribe(resultado => {
    //   if (resultado) {
    //     // El usuario hizo clic en "Sí"
    //     console.log('El usuario confirmó la acción.');
    //   } else {
    //     // El usuario hizo clic en "No" o cerró el diálogo
    //     console.log('El usuario canceló la acción.');
    //   }
    // });
    //if(this.StringBusqueda.length > 3){
      this.productosFinancierosService.eliminarProductos(idProducto).subscribe(
        {
          next: () =>{
            alert('Se elimino correctamente el producto ');
            this.obtenerProductos();
          },
          error: (error) =>{
            
            alert('Se elimino correctamente el producto ');
            console.error('Se produjo un error '+ error);
            alert('Se produjo un error '+ error);
          } 
        }
      )
    //}
  }


  redirec(){
    this.router.navigate(['app/agregar']);
  }

}
