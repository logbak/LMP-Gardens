import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://efa-gardenapp-backend.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(`${ApiUrl}/product`);
  }

  getProduct(id: string) {
    return this._http.get(`${ApiUrl}/product/${id}`);
  }

  deleteProduct(id: number) {
    return this._http.delete(`${ApiUrl}/products/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
