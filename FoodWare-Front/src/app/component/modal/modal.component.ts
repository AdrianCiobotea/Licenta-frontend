import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs';
import { Extra } from 'src/app/model/extra.model';
import { Product } from 'src/app/model/product.model';
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
  @Input("extraProducts") extraProducts: Extra[] = [];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private extraService: ExtraService,private shoppingCartService: ShoppingCartService) {
  }

  getExtraProducts(categoryId: number) {
    this.extraService.getExtrasByCategoryId(categoryId).subscribe(products =>{
      this.extraProducts = products;
    });
  }
  open(content: any) {
    this.modalService.open(content);
    this.getExtraProducts(this.product.categoryId);
  }

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

}
