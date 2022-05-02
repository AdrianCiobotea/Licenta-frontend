import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http:HttpClient) { }
getAll() { 
    return this.http.get('http://localhost:8082/orderItem');
}
create(orderItem: any) { 
  return this.http.post('http://localhost:8082/orderItem/insert',JSON.stringify(orderItem),  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
}

getById(orderItemId : number) { 
  return this.http.get('http://localhost:8082/orderItem/'+orderItemId);
}

update(orderItemId: number, orderItem: any) { 
  return this.http.post('http://localhost:8082/orderItem/update?'+orderItemId,JSON.stringify(orderItem),  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
}

delete(orderItemId:number) { 
  return this.http.get('http://localhost:8082/orderItem/delete?'+orderItemId);
}
}