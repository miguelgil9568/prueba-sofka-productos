import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductoFinanciero} from "../share/interface/ProductoFinanciero";

@Injectable({
  providedIn: 'root'
})
export class ProductosFinancierosService {
  private apiUrl = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<ProductoFinanciero[]> {
    return this.http.get<ProductoFinanciero[]>(this.apiUrl);
  }

  eliminarProductos(termino: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}?id=${termino}`);
  }

  agregarProducto(producto: ProductoFinanciero): Observable<ProductoFinanciero> {
    return this.http.post<ProductoFinanciero>(this.apiUrl, producto);
  }

  editarProducto(id: string, producto: ProductoFinanciero): Observable<ProductoFinanciero> {
    return this.http.put<ProductoFinanciero>(`${this.apiUrl}`, producto);
  }

  verificarId(id: string ){
    return this.http.get<ProductoFinanciero>(`${this.apiUrl}/verification?id=${id}`);
  }
}
