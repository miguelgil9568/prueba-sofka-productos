import { ComponentFixture, TestBed } from '@angular/core/testing';


import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ListadoComponent } from './listado.component';
import { ProductosFinancierosService } from 'src/app/services/productos-financieros.service';
import * as producto from '../../../../data/producto.json'
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  let service: ProductosFinancierosService;
  let httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListadoComponent]
    }).compileComponents();
    service = new ProductosFinancierosService(httpClientSpy as any)

    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


   it('Deben de retornar una lista de objetos productos', () =>{
     httpClientSpy.get.and.returnValue(of({}))
     service.obtenerProductos().subscribe( r=>{
     })
   })

});
