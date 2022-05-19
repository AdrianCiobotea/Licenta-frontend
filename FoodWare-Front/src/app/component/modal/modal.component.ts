import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Extra } from 'src/app/model/extra.model';
import { OrderItem } from 'src/app/model/orderItem.model';
import { Product } from 'src/app/model/product.model';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { ExtraService } from 'src/app/service/extra/extra.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent {

  @Input("product")
  product!: Product;
  @Input("extra") extra: Extra[] = [];
  @Input("orderItem")
  orderItem!: OrderItem;
  constructor(config: NgbModalConfig, private modalService: NgbModal, private extraService: ExtraService, private shoppingCartService: ShoppingCartService) {
  this.orderItem = new OrderItem();
  this.orderItem.quantity=1;
  }

  getExtraProducts(categoryId: number) {
    this.extraService.getExtrasByCategoryId(categoryId).subscribe(products => {
      this.extra = products;
    });
  }
  open(content: any) {
    this.modalService.open(content);
    this.getExtraProducts(this.product.categoryId);
  }

  addToCart() {
    this.orderItem.extra = this.extra;
    this.orderItem.product_id = this.product.id;
      this.shoppingCartService.addToCart(this.orderItem);
      this.modalService.dismissAll();
  }
  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product.id);
  }
  getQuantity() {
    let cart: any = JSON.parse(localStorage.getItem("cart") || '{}');
    return cart ? cart['totalQuantity'] : 0;
  }
  increaseQuantity() {
    // let cart: ShoppingCart = JSON.parse(localStorage.getItem("cart") || '{}');
    // let cartItems: OrderItem[] = cart['items'];
    // cartItems.forEach(element => {
    //   if (productId == element.product_id)
    //     element.quantity += 1;
    // });
    // cart.items = cartItems;
    // localStorage.setItem('cart', JSON.stringify(cart));
    this.orderItem.quantity++;
  }
  decreaseQuantity() {
    // let cart: ShoppingCart = JSON.parse(localStorage.getItem("cart") || '{}');
    // let cartItems: OrderItem[] = cart['items'];
    // cartItems.forEach(element => {
    //   if (productId == element.product_id)
    //     element.quantity -= 1;
    // });
    // cart.items = cartItems;
    // localStorage.setItem('cart', JSON.stringify(cart));
    this.orderItem.quantity--;
    console.log(this.orderItem);
    
  }
}
