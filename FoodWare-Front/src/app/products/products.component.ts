import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { Subscription, switchMap } from 'rxjs';
import { ProductService } from '../service/product/product.service';
import { Category } from '../model/category.model';
import { SubOrderService } from '../service/sub-order/sub-order.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{

  products: Product[] = [];
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  filteredProducts: Product[] = [];
  categoryId!: number;
  groupId!:number;
  subOrderService!: SubOrderService;
  subOrder!: any;
  subscription: Subscription = new Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService
  ) {
    
    route.queryParams.subscribe(params => {
      console.log(params);
      if(params['group']){
        productService.getByGroupId(params['group']).pipe(switchMap((products:any)=>{
          this.products = products;
          return route.queryParamMap;
        })).subscribe((params:any) => {
          this.categoryId = params.get('category');
          this.filteredProducts = (this.categoryId) ? this.products.filter(p => p.categoryId == this.categoryId) : this.products;
          console.log(this.filteredProducts);
        });   
      } else {
        productService.getAll().pipe(switchMap((products:any)=>{
          this.products = products;
          return route.queryParamMap;
        })).subscribe((params:any) => {
          this.categoryId = params.get('category');
          this.filteredProducts = (this.categoryId) ? this.products.filter(p => p.categoryId == this.categoryId) : this.products;
          console.log(this.filteredProducts);
        });  
      }
    })
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  async ngOnInit() {
  this.subscription = ((await this.subOrderService.getSubOrder()).subscribe(subOrder => this.subOrder = subOrder)) ;
  }

}
