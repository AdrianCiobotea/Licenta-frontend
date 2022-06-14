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
  cart$: BehaviorSubject<ShoppingCart> = new BehaviorSubject(new ShoppingCart());

  constructor() {

    let cartString = localStorage.getItem("cart");
    let cart: ShoppingCart = JSON.parse(cartString || "{}");
    this.cartSize$.next(cart.totalQuantity);
    this.cart$.next(cart);
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

    this.addCartToLocalStorage(cart);
    console.log('#### items2', cart);
    this.updateTotalQuantity;
  }

  getOrCreateCartId() {
    let cart: any = localStorage.getItem('cart')! || '{}';

    if (cart.id) {
      return cart.id;
    } else {
      let cart: any = new ShoppingCart();
      this.addCartToLocalStorage(cart);
      return cart['id'];
    }
  }

  removeFromCart(orderItem: OrderItem) {
    let cart: ShoppingCart = JSON.parse(localStorage.getItem("cart") || "{}");
    cart.items.forEach((item) => {
      if (item.id == orderItem.id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          cart.items.splice(cart.items.findIndex(element => element.id == orderItem.id), 1);
        }
      }
      cart.totalQuantity -= item.quantity;
    })

    this.updateTotalQuantity;
    this.addCartToLocalStorage(cart);

  }

  getCart() {
    let cart: ShoppingCart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (Object.keys(cart).length == 0) {
      return null;
    } else {
      return of(cart);
    }
  }

  addCartToLocalStorage(cart: ShoppingCart) {
    this.updateTotalQuantity();
    this.cart$.next(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  updateTotalQuantity() {
    this.cart$.subscribe((cart: ShoppingCart) => {
      let totalQuantity = 0;
      cart.items.forEach((item: OrderItem) => {
        totalQuantity += item.quantity;
      })
      cart.totalQuantity = totalQuantity;
      this.cartSize$.next(totalQuantity);
    })
  }
}
