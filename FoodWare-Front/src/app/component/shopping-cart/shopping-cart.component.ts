import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$!: Observable<ShoppingCart> | null;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    console.log(this.cart$);
  }



}
