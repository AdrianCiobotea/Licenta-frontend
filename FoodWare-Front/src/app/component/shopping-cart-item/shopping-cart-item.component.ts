import { Component, Input, OnInit, Output } from '@angular/core';
import { OrderItem } from 'src/app/model/orderItem.model';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';
import { Order } from 'src/app/model/order.model';
import { take } from 'lodash';

@Component({
  selector: 'shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input("item") item!: OrderItem;
  @Input("cart") cart!: ShoppingCart | null;

  constructor(private shoppingCartService: ShoppingCartService) {
  }
  ngOnInit() {

  }

  increaseQuantity() {
    console.log(this.item);
      this.cart?.items.forEach((shoppingItem: OrderItem) => {
        if (this.item.id == shoppingItem.id) {
          shoppingItem.quantity += 1;
        }
      })
      if (this.cart) {
        this.shoppingCartService.addCartToLocalStorage(this.cart);
      }
  }
  decreaseQuantity() {
      console.log('### decrease');
      this.cart?.items.forEach((item: OrderItem) => {
        if (item.id == this.item.id) {
          if (this.item.quantity == 1) {
            this.cart?.items.splice(this.cart?.items.findIndex(shoppingProduct => shoppingProduct.id == this.item?.id), 1);
          } else {
            item.quantity -= 1;
          }
        }
      })
      if (this.cart) {
        this.shoppingCartService.addCartToLocalStorage(this.cart);
      }

  }


  getOrderItemPrice(orderItem: OrderItem) {
    let totalPrice = orderItem.product.price;
    orderItem.extra.forEach(extraProduct => {
      totalPrice += extraProduct.price;
    });
    totalPrice *= orderItem.quantity;
    return totalPrice;
  }

  removeOrderItem() {
    // this.shoppingCartService.removeFromCart(item);
      this.cart?.items.splice(this.cart?.items.findIndex(shoppingProduct => shoppingProduct.id == this.item.id), 1);
      console.log(this.cart?.totalQuantity);
      if (this.cart) {
        this.shoppingCartService.addCartToLocalStorage(this.cart);
      }
  }
  editOrderItem(item: OrderItem) {

  }
}
