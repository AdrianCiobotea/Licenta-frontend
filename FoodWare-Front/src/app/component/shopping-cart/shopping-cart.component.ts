import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'lodash';
import { Observable, of, switchMap, take } from 'rxjs';
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

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cart$ = this.shoppingCartService.cart$;
  }

  private getOrderItemPrice(orderItem: OrderItem) {
    if (orderItem != null) {
      let totalPrice = orderItem.product.price;
      orderItem.extra.forEach(extraProduct => {
        totalPrice += extraProduct.price;
      });
      totalPrice *= orderItem.quantity;
      return totalPrice;
    }
    return 0;
  }


  getTotalPrice(): Observable<number> | undefined {
    let totalPrice = 0;
    return this.cart$?.pipe(
      take(1),
      switchMap((cart: ShoppingCart) => {
      cart.items.forEach((item: OrderItem) => totalPrice += this.getOrderItemPrice(item));
      return of(totalPrice);
    }));
  }

  confirmOrder(cart: ShoppingCart) {

  }

}
