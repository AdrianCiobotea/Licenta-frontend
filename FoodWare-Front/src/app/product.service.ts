import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll() { 
    return this.http.get('http://localhost:8084/product');
}
getImageById(id:number){
  return this.http.get('http://localhost:8084/product/image/'+id);
}
create(product: any) { 
  return this.http.post('http://localhost:8084/product/insert',JSON.stringify(product),  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
}

get(productId : number) { 
  return this.http.get('http://localhost:8084/product');
}

update(productId: number, product: any) { 
  return this.http.post('http://localhost:8084/product/update?'+productId,JSON.stringify(product),  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
}

delete(productId:number) { 
  return this.http.get('http://localhost:8084/product/delete?'+productId);
}
}
