import { Component, Input, OnInit } from '@angular/core';
import { SubOrder } from 'src/app/model/sub-order.model';
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

  constructor(private subOrderService: SubOrderService) { }

  addToCart() {
    this.subOrderService.addToCart(this.product.id);
  }
  removeFromCart(){
    this.subOrderService.removeFromCart(this.product.id);
  }
  getQuantity(){
    let item :any = JSON.parse(localStorage.getItem(this.product.id.toString()) || '{}');
    return item ? item['quantity'] : 0;
  }
  isProductInLocalStorage(){
    if(localStorage.getItem(this.product.id.toString())!=null){
      return false;
    }else{
      return true;
    }
  }
}
