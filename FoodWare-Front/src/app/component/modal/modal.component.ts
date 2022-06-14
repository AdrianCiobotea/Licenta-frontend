import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Extra } from 'src/app/model/extra.model';
import { OrderItem } from 'src/app/model/orderItem.model';
import { Product } from 'src/app/model/product.model';
import { ExtraService } from 'src/app/service/extra/extra.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';
import * as uuid from 'uuid';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent {

  @Input("product")
  product!: Product;
  @Input("extra") extra: Extra[] = [];
  @Input("orderItem")
  orderItem!: OrderItem;

  form: FormGroup;


  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private extraService: ExtraService,
    private shoppingCartService: ShoppingCartService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      extras: new FormArray([])
    });
    this.orderItem = new OrderItem(uuid.v4());
    this.orderItem.quantity = 1;


  }

  getExtraProducts(categoryId: number) {
    return this.extraService.getExtrasByCategoryId(categoryId);
  }


  open(content: any) {
    console.log(this.product);
    if (this.extrasFormArray.length) {
      this.form = this.formBuilder.group({
        extras: new FormArray([])
      });
    }
    this.getExtraProducts(this.product.categoryId).subscribe((result: any[]) => {
      this.extra = result;
      result.forEach(() => this.extrasFormArray.push(new FormControl(false)));
      this.modalService.open(content);
    });

  }

  addToCart() {
    const selectedExtras = this.form.value['extras']
      .map((checked: any, i: number) => checked ? this.extra[i] : null)
      .filter((v: null) => v !== null);
    console.log('### selected', selectedExtras);
    this.orderItem.extra = selectedExtras;
    this.orderItem.product = this.product;
    this.shoppingCartService.addToCart(this.orderItem);
    this.modalService.dismissAll();
  }
  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.orderItem);
  }
  getQuantity() {
    let cart: any = JSON.parse(localStorage.getItem("cart") || '{}');
    return cart ? cart['totalQuantity'] : 0;
  }
  increaseQuantity() {
    this.orderItem.quantity++;
  }
  decreaseQuantity() {
    this.orderItem.quantity--;
    console.log(this.orderItem);
  }
  addCheckBoxesToForm() {
  }

  get extrasFormArray() {
    return this.form.controls['extras'] as FormArray;
  }

  submit() {
    const selectedExtras = this.form.value['extras']
      .map((checked: any, i: string | number) => checked ? this.extra : null)
      .filter((v: null) => v !== null);
  }

}
