import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { switchMap } from 'rxjs';
import { ProductService } from '../service/product/product.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  filteredProducts: Product[] = [];
  categoryId!: number;
  groupId!:number;

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
}
