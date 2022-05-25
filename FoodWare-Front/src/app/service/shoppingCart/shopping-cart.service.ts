import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, of } from 'rxjs';
import { OrderItem } from 'src/app/model/orderItem.model';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartSize$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {

    let cartString = localStorage.getItem("cart");
    let cart: ShoppingCart = JSON.parse(cartString || "{}");
    this.cartSize$.next(cart.totalQuantity);
  }

  async addToCart(orderItem: OrderItem) {

    let cartString = localStorage.getItem("cart");
    let cart: ShoppingCart = JSON.parse(cartString || "{}");
    localStorage.removeItem("cart");

    if (!cart) {
      cart = new ShoppingCart(1);
    }
    const items: OrderItem[] = cart.items || [];
    items.push(orderItem);

    cart.totalQuantity = 0;
    items.forEach(element => {
      cart.totalQuantity += element.quantity;
    })
    console.log(cart.totalQuantity);
    console.log('#### items', items);
    cart.items = items;

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log('#### items2', cart);
    this.cartSize$.next(cart.totalQuantity);
  }

  getOrCreateCartId() {
    let cart: any = localStorage.getItem('cart')! || '{}';

    if (cart.id) {
      return cart.id;
    } else {
      let cart: any = new ShoppingCart();
      localStorage.setItem('cart', JSON.stringify(cart));
      return cart['id'];
    }
  }

  removeFromCart(productId: number) {
    let cart: ShoppingCart = JSON.parse(localStorage.getItem("cart") || "{}");
    cart.items.forEach((orderItem) => {
      if (orderItem.product_id == productId) {
        if (orderItem.quantity > 1) {
          orderItem.quantity -= 1;
        } else {
          cart.items.splice(cart.items.findIndex(element => element.id == orderItem.id), 1);
        }

      }
    })
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  getCart() {
    let cart: ShoppingCart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (Object.keys(cart).length == 0) {
      return null;
    } else {
      return of(cart);
    }
  }

}
