import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category!: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService
  ) {
    productService
      .getAll().pipe(switchMap((products: any) => {
        this.products = products;
        return route.queryParamMap;
      })).subscribe((params:any) => {
        this.category = params.get('category');
        
        this.filteredProducts = (this.category) ? 
          this.products.filter(p => p.category === this.category) : 
          this.products;
      });
      
      
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
