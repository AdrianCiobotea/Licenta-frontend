import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ShoppingCart } from '../../model/shopping-cart.model';
import { ShoppingCartService } from '../../service/shopping-cart/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  shoppingCart !: ShoppingCart;
  @Input() product!: Product;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);


    

        //Add product to cart
      });
    } else {
      //Add product to cart
    }
  }
}
