import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosFinancierosService } from 'src/app/services/productos-financieros.service';
import { ProductoFinanciero } from 'src/app/share/interface/ProductoFinanciero';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formulario!: FormGroup ;
  isActualizar: boolean = false;

  fechaHoy= new Date().toISOString().split('T')[0];
  fechaRevision= '';
  id: string | null = null;

  constructor(
      private formBuilder: FormBuilder,
      private productosService: ProductosFinancierosService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        // Obtén el valor del parámetro 'id' de la URL
        this.id = params.get('id');
        console.log('Parámetro id:', this.id); 
        this.productosService.obtenerProductos().subscribe(
          {next: (data) =>{ 
            this.formulario.setValue(data.filter(producto => producto.id == this.id)[0]);
            this.formulario.controls['date_release'].setValue(new Date(data.filter(producto => producto.id == this.id)[0].date_release).toISOString().split('T')[0])
            this.formulario.controls['date_revision'].setValue(new Date(data.filter(producto => producto.id == this.id)[0].date_revision).toISOString().split('T')[0])
            this.isActualizar = true;
          },
          error : () => { 
            console.log('Se produjo un error');
            alert('Se produjo un error');
          }
          }
        )
      });
      this.formulario = this.formBuilder.group({
          id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
          name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
          description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
          logo: ['', Validators.required],
          date_release: ['', [Validators.required]],
          date_revision: ['', [Validators.required]]
      });
  }

  agregarProducto(): void {
    if (this.formulario.valid) {
      const nuevoProducto: ProductoFinanciero = this.formulario.value;

      // Verificar si el ID ya existe
      if(this.isActualizar){
        this.productosService.editarProducto(this.id !== null ? this.id : '' , nuevoProducto).subscribe(
          () => {
              alert('El producto fue editado');
              this.router.navigate(['/listado']);
          },
          (error) => {
              console.error('Error al agregar el producto:', error);
          }
      );
      }else {
        this.productosService.verificarId(nuevoProducto.id).subscribe(
            (existe: any) => {
                if (!existe ) {
                    // Si el ID no existe, proceder con la creación del producto
                    this.productosService.agregarProducto(nuevoProducto).subscribe(
                        () => {
                            alert('El producto fue agregado');
                            this.router.navigate(['/listado']);
                        },
                        (error) => {
                            console.error('Error al agregar el producto:', error);
                        }
                    );
                } else {
                    console.error('El ID del producto ya existe');
                    alert('El ID del producto ya existe');
                }
            }
        );
      }
    }
  }

  reiniciarFormulario(): void {
      this.formulario.reset();
  }

  determinarNuevaHora(){
    
//     this.fechaRevision = this.formulario.controls['date_release'].value;
// let year = date.substring(0,4);
    console.log(' date = '+this.formulario.controls['date_release'].value);
  }
}
