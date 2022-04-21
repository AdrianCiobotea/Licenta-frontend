import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ShoppingCart } from 'src/app/model/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) {
  }
  private create(shoppingCart: any) {
    return this.http.post('http://localhost:8082/shoppingCart/insert', JSON.stringify(shoppingCart), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  private getShoppingCart(cartId: number) {
    return this.http.get('http://localhost:8082/shoppingCart/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = Number(localStorage.getItem('cartId'));

    if (cartId) return cartId;
    
      //this.shoppingCart.initiatorId = Number(sessionStorage.getItem("userId"));
      let result : any = await this.create(new ShoppingCart(undefined, 1)); //TODO use UserId insted of 1
      localStorage.setItem('cartId', result['id']);
      return result['id'];
  }

  private async getOrCreateSubOrderId() {
    let subOrderId = Number(localStorage.getItem('subOrderId'));

    if (subOrderId) return subOrderId;
    
      //this.shoppingCart.initiatorId = Number(sessionStorage.getItem("userId"));
      let result : any = await this.create(new ShoppingCart(undefined, 1)); //TODO use UserId insted of 1
      localStorage.setItem('cartId', result['id']);
      return result['id'];
  }


 async addToCart(product:Product){
    let cartId = await this.getOrCreateCartId();
    
  }
}
