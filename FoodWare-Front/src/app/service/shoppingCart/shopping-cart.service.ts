import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  async addToCart(productId: number) {
    //     let orderId = await this.orderService.getOrCreateOrderId();
    //     let subOrderId = await this.getOrCreateSubOrderId();
    //     let product$ = this.orderItemService.getById(orderItem.id);
    //     orderItem$.subscribe(orderItem => {
    //       if (typeof orderItem === "object") {
    // orderItem.
    //       }
    //     });

    let cartString = localStorage.getItem("cart");
    let cart: ShoppingCart = JSON.parse(cartString || "{}");
    localStorage.removeItem("cart");
      
    if (!cart) {
      cart = new ShoppingCart(1);
    }
    const items: OrderItem[] = cart.items || [];
    const newOrderItem = new OrderItem(undefined, 1, cart.id, productId, undefined);
    items.push(newOrderItem);
    
cart.totalQuantity+=1;
console.log(cart.totalQuantity);
    console.log('#### items', items);
    cart.items = items;

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log('#### items2', cart);
    this.cartSize$.next(cart.totalQuantity);
    // let scartString = localStorage.getItem("scart");
    // let scart: string[] = JSON.parse(scartString || "{}");
    // if (scart) {
    //   scart.push("da");
    // } else {
    //   scart = [];
    //   scart.push("da");
    // }
    // localStorage.setItem("scart", JSON.stringify(scart));

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
}
