import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { SubOrderService } from '../sub-order/sub-order.service';
import { OrderItem } from 'src/app/model/orderItem.model';
import { OrderItemService } from '../orderItem/order-item.service';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private subOrderService: SubOrderService, private orderItemService: OrderItemService) {
  }
  private create(Order: any) {
    return this.http.post('http://localhost:8082/order/insert', JSON.stringify(Order), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  private getOrder(orderId: number) {
    return this.http.get('http://localhost:8082/order/' + orderId);
  }

  public async getOrCreateOrderId() {
    let orderId = Number(localStorage.getItem('orderId'));

    if (orderId) return orderId;

    //this.Order.initiatorId = Number(sessionStorage.getItem("userId"));
    let result: any = await this.create(new Order(undefined, 1)); //TODO use UserId insted of 1
    localStorage.setItem('cartId', result['id']);
    return result['id'];
  }


 
}
