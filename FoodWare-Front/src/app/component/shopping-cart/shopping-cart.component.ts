import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forEach } from 'lodash';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/model/orderItem.model';
import { Product } from 'src/app/model/product.model';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$!: Observable<ShoppingCart> | null;
  products!: Product[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

  getOrderItemPrice(orderItem: OrderItem) {
    let totalPrice = orderItem.product.price;
    orderItem.extra.forEach(extraProduct => {
      totalPrice += extraProduct.price;
    });
    totalPrice *= orderItem.quantity;
    return totalPrice;
  }


  getTotalPrice() {
    let totalPrice = 0;
    this.cart$?.subscribe(cart => {
      cart.items.forEach(item => totalPrice += this.getOrderItemPrice(item));
    })
    return totalPrice;
  }

}
