import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ShoppingCart } from 'src/app/model/shoppingCart.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  totalQuantity: number = 0;
  cartSize$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private shoppingCartService: ShoppingCartService, private authService: AuthService) {
    this.cartSize$ = shoppingCartService.cartSize$;
    authService.isLoggedIn$.subscribe(res => {
      console.log(res);
      this.isLoggedIn = res;
    })
  }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.authService.isLoggedIn$.next(true);
    }
  }

  logout() {
    this.authService.logout();
  }

}

