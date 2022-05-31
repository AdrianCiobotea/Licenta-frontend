import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ModalComponent } from 'ngb-modal';
import { Extra } from 'src/app/model/extra.model';
import { OrderItem } from 'src/app/model/orderItem.model';
import { Product } from 'src/app/model/product.model';
import { ExtraService } from 'src/app/service/extra/extra.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'modal-shopping-cart',
  templateUrl: './modal-shopping-cart.component.html',
  styleUrls: ['./modal-shopping-cart.component.css']
})
export class ModalShoppingCartComponent {

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

  }

  open(content: any) {
    console.log(this.orderItem.product);
    if (this.extrasFormArray.length) {
      this.form = this.formBuilder.group({
        extras: new FormArray([])
      });
    }
    this.getExtraProducts(this.orderItem.product.categoryId).subscribe((result: any[]) => {
      this.extra = result;
      result.forEach(() => this.extrasFormArray.push(new FormControl(false)));
      this.modalService.open(content);
    });
  }

  submit() {
    const selectedExtras = this.form.value['extras']
      .map((checked: any, i: string | number) => checked ? this.extra : null)
      .filter((v: null) => v !== null);
  }

  get extrasFormArray() {
    return this.form.controls['extras'] as FormArray;
  }

  saveChanges() {
    const selectedExtras = this.form.value['extras']
      .map((checked: any, i: number) => checked ? this.extra[i] : null)
      .filter((v: null) => v !== null);
    console.log('### selected', selectedExtras);


    let cart = JSON.parse(localStorage.getItem("cart") || "{}");
    cart.items.forEach((item: any,index: any) => {
      if (_.isEqual(item, this.orderItem)) {
        console.log(item);
        this.orderItem.extra = selectedExtras;
        cart.items[index] = this.orderItem;
        console.log(item);
      }
    });
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));

    this.modalService.dismissAll();
  }

  getExtraProducts(categoryId: number) {
    return this.extraService.getExtrasByCategoryId(categoryId);
  }

}
