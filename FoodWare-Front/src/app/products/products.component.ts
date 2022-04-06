import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { switchMap } from 'rxjs';
import { ProductService } from '../service/product/product.service';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category/category.service';

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
    productService: ProductService,
    categoryService: CategoryService
  ) {
    categoryService.getCategories().pipe(switchMap((categories:any)=>{
      this.categories = categories;
      return route.queryParamMap;
    })).subscribe((params:any)=>{
      this.groupId = params.get('group');
      this.filteredCategories = (this.groupId) ? this.categories.filter(c => c.groupId == this.groupId) : this.categories;
    });
    productService
      .getAll().pipe(switchMap((products: any) => {
        this.products = products;
        return route.queryParamMap;
      })).subscribe((params:any) => {
        this.categoryId = params.get('category');
        this.filteredProducts = (this.categoryId) ? this.products.filter(p => p.categoryId == this.categoryId) : this.products;
        console.log(this.filteredProducts);
      });   
  }
}
