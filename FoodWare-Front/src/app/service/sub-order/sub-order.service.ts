import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public async getSubOrder() {
    let subOrderId = await this.getOrCreateSubOrderId();
    return this.http.get('http://localhost:8082/subOrder/' + subOrderId);
  }

  public async getOrCreateSubOrderId() : Promise<string>{
    let subOrderId = localStorage.getItem('subOrderId');

    if (subOrderId) return subOrderId;
    
      //this.Order.initiatorId = Number(sessionStorage.getItem("userId"));
      let result : any = await this.create(new SubOrder(1)); //TODO use UserId insted of 1
      localStorage.setItem('subOrderId', result['id']);
      return result['id'];
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
if(localStorage.getItem(productId.toString())!=null){
let orderItem: any = JSON.parse(localStorage.getItem(productId.toString()) || '{}');
orderItem["quantity"]+=1;
localStorage.setItem(productId.toString(),JSON.stringify(orderItem));
}else{
  let orderItem = new OrderItem(undefined,1,undefined,productId,undefined);
  localStorage.setItem(productId.toString(),JSON.stringify(orderItem));
}


  }
  
}
