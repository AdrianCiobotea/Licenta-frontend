import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import { switchMap } from 'rxjs';
import { Ng2SearchPipe } from 'ng2-search-filter';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  categoryId!: number;

  constructor(
    route: ActivatedRoute,
    productService: ProductService
  ) {
    productService
      .getAll().pipe(switchMap((products: any) => {
        this.products = products;
        return route.queryParamMap;
      })).subscribe((params:any) => {
        this.categoryId = params.get('category');
        this.filteredProducts = (this.categoryId) ? this.products.filter(p => p.categoryId == this.categoryId) : this.products;
        console.log(this.filteredProducts);

        this.filteredProducts.forEach(product => {
          if(product.imageId!=null){
            productService.getImageById(product.imageId).subscribe((param:any)=>
            product.imageURL=URL.createObjectURL(param));
            console.log(product.imageURL);
          }
        });
        console.log("filteredProducts after image ",this.filteredProducts);
      });
      
      
      
      
  }
}
