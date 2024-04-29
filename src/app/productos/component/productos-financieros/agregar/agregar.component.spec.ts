import { ComponentFixture, TestBed } from '@angular/core/testing';


import {HttpClientTestingModule} from "@angular/common/http/testing";
import { AgregarComponent } from './agregar.component';
import { ProductosFinancierosService } from 'src/app/services/productos-financieros.service';
import * as producto from '../../../../data/producto.json';
import * as productoInvalido from '../../../../data/productoInvalido.json'
import { ListadoComponent } from '../listado/listado.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('AgregarComponent', () => {
  let component: AgregarComponent;
  let fixture: ComponentFixture<AgregarComponent>;

  let mockProducto: any = (producto as any).default;
  let mockProductoInvalido: any = (productoInvalido as any).default;
  let httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['post']);
  let service: ProductosFinancierosService ;

  const mockActivatedRoute = { 
    queryParams: of({ id: 'hola' }) 
  };



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [AgregarComponent], 
      providers: [ProductosFinancierosService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute}, // Proporciona el espía
      ],
    }).compileComponents();
    httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['post']);
    service = new ProductosFinancierosService(httpClientSpy as any)

    fixture = TestBed.createComponent(AgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


   it('Deben de retornar un objeto con "data" y session', () =>{
     const producto: any = mockProducto;
     httpClientSpy.post.and.returnValue(of({}));
     if (service.agregarProducto(producto)) {
      
      service.agregarProducto(producto).subscribe( r=>{
    })
    } else {
      console.error('El observable es undefined');
    }
   })


  //TODO debe asegurar de que todo el formulario sea invalido cuando ingrese

  it('Deberia de retornar "invalido" el formulario', () => {
    const mockCredenciales = mockProductoInvalido;
    let id = component.formulario.get('id');
    let name = component.formulario.get('name');
    let description = component.formulario.get('description');
    let logo = component.formulario.get('logo');
    let date_release = component.formulario.get('date_release');
    let date_revision = component.formulario.get('date_revision');

    id?.setValue(mockCredenciales.id);
    name?.setValue(mockCredenciales.name);
    description?.setValue(mockCredenciales.description);
    logo?.setValue(mockCredenciales.logo);
    date_release?.setValue(mockCredenciales.date_release);
    date_revision?.setValue(mockCredenciales.date_revision);


    expect(component.formulario.invalid).toEqual(true);
  });

  //TODO debe asegurar de que todo el formulario sea invalido cuando ingrese

  it('Deberia de retornar "valido" el formulario', () => {
    const mockCredenciales = mockProducto;
    let id = component.formulario.get('id');
    let name = component.formulario.get('name');
    let description = component.formulario.get('description');
    let logo = component.formulario.get('logo');
    let date_release = component.formulario.get('date_release');
    let date_revision = component.formulario.get('date_revision');

    id?.setValue(mockCredenciales.id);
    name?.setValue(mockCredenciales.name);
    description?.setValue(mockCredenciales.description);
    logo?.setValue(mockCredenciales.logo);
    date_release?.setValue(mockCredenciales.date_release);
    date_revision?.setValue(mockCredenciales.date_revision);


    expect(component.formulario.invalid).toEqual(false);
  });
});
