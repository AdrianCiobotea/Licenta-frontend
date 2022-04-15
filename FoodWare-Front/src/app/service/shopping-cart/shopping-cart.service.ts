import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) {
  }
  create(shoppingCart: any) {
    return this.http.post('http://localhost:8082/shoppingCart/insert', JSON.stringify(shoppingCart), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
