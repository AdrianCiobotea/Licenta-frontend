import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/model/orderItem.model';

@Component({
  selector: 'unmodifiable-shopping-item',
  templateUrl: './unmodifiable-shopping-item.component.html',
  styleUrls: ['./unmodifiable-shopping-item.component.css']
})
export class UnmodifiableShoppingItemComponent implements OnInit {
  @Input("item") item!: OrderItem;
  constructor() { }

  ngOnInit(): void {
  }
  
  getOrderItemPrice(orderItem: OrderItem) {
    let totalPrice = orderItem.product.price;
    orderItem.extra.forEach(extraProduct => {
      totalPrice += extraProduct.price;
    });
    totalPrice *= orderItem.quantity;
    return totalPrice;
  }

}
