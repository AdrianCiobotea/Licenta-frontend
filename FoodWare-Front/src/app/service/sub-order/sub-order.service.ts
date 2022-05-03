import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/model/orderItem.model';
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

  async addToCart(productId: number) {
    //     let orderId = await this.orderService.getOrCreateOrderId();
    //     let subOrderId = await this.getOrCreateSubOrderId();
    //     let product$ = this.orderItemService.getById(orderItem.id);
    //     orderItem$.subscribe(orderItem => {
    //       if (typeof orderItem === "object") {
    // orderItem.
    //       }
    //     });
      let subOrderId = await this.getOrCreateSubOrderId();
      if (localStorage.getItem(productId.toString()) != null) {
        let orderItem: any = JSON.parse(localStorage.getItem(productId.toString()) || '{}');
        orderItem["quantity"] += 1;
        localStorage.setItem(productId.toString(), JSON.stringify(orderItem));
      } else {
        let orderItem = new OrderItem(undefined, 1, subOrderId, productId, undefined);
        localStorage.setItem(productId.toString(), JSON.stringify(orderItem));
      }
  }

  removeFromCart(productId: number) {
    let orderItem: any = JSON.parse(localStorage.getItem(productId.toString()) || '{}');
    if(orderItem["quantity"]!=1){
      orderItem["quantity"] -= 1;
      localStorage.setItem(productId.toString(), JSON.stringify(orderItem));
    }
    else{
      localStorage.removeItem(productId.toString());
    }
     
  }

}
