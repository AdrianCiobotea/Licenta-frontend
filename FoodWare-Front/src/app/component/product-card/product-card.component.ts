import { Component, Input, OnInit } from '@angular/core';
import { SubOrder } from 'src/app/model/sub-order.model';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';
import { SubOrderService } from 'src/app/service/sub-order/sub-order.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product!: Product;
  @Input('show-actions') showActions = true;
  @Input('subOrder') subOrder!: SubOrder;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addToCart(this.product.id);
  }
  removeFromCart(){
    this.shoppingCartService.removeFromCart(this.product.id);
  }
  getQuantity(){
    let cart :any = JSON.parse(localStorage.getItem("cart") || '{}');
    return cart ? cart['totalQuantity'] : 0;
  }
  isProductInLocalStorage(){
    if(localStorage.getItem(this.product.id.toString())!=null){
      return false;
    }else{
      return true;
    }
  }
}
