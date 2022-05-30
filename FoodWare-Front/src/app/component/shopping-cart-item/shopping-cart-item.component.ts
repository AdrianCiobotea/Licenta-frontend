import { Component, Input, OnInit, Output } from '@angular/core';
import { OrderItem } from 'src/app/model/orderItem.model';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {

  @Input("item") item!: OrderItem;
  @Input("cart") cart$!: Observable<ShoppingCart> | null;
  constructor() { }


  increaseQuantity(item: OrderItem) {
    if (this.cart$ != null) {
      this.cart$.subscribe((cart: ShoppingCart) => {
        let product = cart.items.find(shoppingCartProduct => shoppingCartProduct.product.id == item.product.id);
        if (product != undefined) {
          product.quantity += 1;
          cart.totalQuantity += 1;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    }
  }
  decreaseQuantity(item: OrderItem) {
    if (this.cart$ != null) {
      this.cart$.subscribe((cart: ShoppingCart) => {
        let shoppingCartProduct = cart.items.find(shoppingCartProduct => shoppingCartProduct.product.id == item.product.id);
        if (shoppingCartProduct != undefined) {
          if (shoppingCartProduct.quantity == 1) {
            cart.items.splice(cart.items.findIndex(shoppingProduct => shoppingProduct.product.id == shoppingCartProduct?.product.id), 1);
          } else {
            shoppingCartProduct.quantity -= 1;
          }
          cart.totalQuantity -= 1;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
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

  removeOrderItem(item: OrderItem) {
    if (this.cart$ != null) {
      this.cart$.subscribe((cart: ShoppingCart) => {
        cart.items.splice(cart.items.findIndex(shoppingProduct => shoppingProduct.product.id == item.product.id), 1);
        cart.totalQuantity -= item.quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    }
  }

  editOrderItem(item: OrderItem) {

  }
}
