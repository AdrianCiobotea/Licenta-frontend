import { Component, Input } from '@angular/core';
import { SubOrder } from 'src/app/model/sub-order.model';
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

  constructor() { }

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
