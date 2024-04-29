import { TestBed } from '@angular/core/testing';

import { ProductosFinancierosService } from './productos-financieros.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductosFinancierosService', () => {
  let service: ProductosFinancierosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Asegúrate de importar HttpClientModule
      providers: [ProductosFinancierosService], // Proporciona el servicio
    });

    // Obtén el servicio desde TestBed
    service = TestBed.inject(ProductosFinancierosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
