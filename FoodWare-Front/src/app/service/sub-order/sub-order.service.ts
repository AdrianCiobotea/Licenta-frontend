import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubOrder } from 'src/app/model/sub-order.model';

@Injectable({
  providedIn: 'root'
})
export class SubOrderService {

  constructor(private http: HttpClient) {
  }
  public create(SubOrder: any) {
    return this.http.post('http://localhost:8082/subOrder/insert', JSON.stringify(SubOrder), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  public async getSubOrder() : Promise<Observable<SubOrder>> {
    return JSON.parse(localStorage.getItem("subOrder") || "{}");
  }

  public async getOrCreateSubOrderId(): Promise<number> {
    let subOrder :any = localStorage.getItem('subOrder')! || '{}';

    if (subOrder['id']) {
      return subOrder['id'];
    }else{
      let subOrder: any = new SubOrder(1); //TODO use UserId insted of 1
      localStorage.setItem('subOrder', JSON.stringify(subOrder) );
      return subOrder['id'];
    }
   
  }

  

}
