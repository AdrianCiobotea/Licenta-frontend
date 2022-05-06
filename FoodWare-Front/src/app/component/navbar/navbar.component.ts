import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  totalQuantity: number = 0;
  cartSize$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private shoppingCartService: ShoppingCartService) {
    this.cartSize$ = shoppingCartService.cartSize$;
  }

  ngOnInit() {
  }

 
}

