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
  @Input("cart") cart!: ShoppingCart;
  constructor() { }


  increaseQuantity(item: OrderItem) {
    let product = this.cart.items.find(shoppingCartProduct => shoppingCartProduct.product.id == item.product.id);
    if (product != undefined) {
      product.quantity += 1;
      this.cart.totalQuantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  decreaseQuantity(item: OrderItem) {
    let shoppingCartProduct = this.cart.items.find(shoppingCartProduct => shoppingCartProduct.product.id == item.product.id);
    if (shoppingCartProduct != undefined) {
      if (shoppingCartProduct.quantity == 1) {
        this.cart.items.splice(this.cart.items.findIndex(shoppingProduct => shoppingProduct.product.id == shoppingCartProduct?.product.id), 1);
      } else {
        shoppingCartProduct.quantity -= 1;
      }
      this.cart.totalQuantity -= 1;
      localStorage.setItem("cart", JSON.stringify(this.cart));
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
    this.cart.items.splice(this.cart.items.findIndex(shoppingProduct => shoppingProduct.product.id == item.product.id), 1);
    this.cart.totalQuantity -= item.quantity;
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  editOrderItem(item: OrderItem) {

  }
}
