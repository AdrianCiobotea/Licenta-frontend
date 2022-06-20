import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-group-shopping-cart',
  templateUrl: './group-shopping-cart.component.html',
  styleUrls: ['./group-shopping-cart.component.css']
})
export class GroupShoppingCartComponent implements OnInit {
  cart$!: Observable<ShoppingCart> | null;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cart$ = this.shoppingCartService.cart$;
  }
  payOrder() {

  }

}
