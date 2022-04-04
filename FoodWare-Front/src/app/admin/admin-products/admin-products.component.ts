import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/product.service';
import { DataTableParams, DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products!: Product[];
  subscription: Subscription;
  tableResource!: DataTableResource<Product>;
  items: Product[] = [];
  itemCount!: number; 

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe((products:any) => {
        this.products = products;
        this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items).catch(items => {
          console.log("promise rejected");});
    this.tableResource.count()
      .then(count => this.itemCount = count).catch(count => {
        console.log("promise rejected");});
  }

  reloadItems(params: DataTableParams) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);    
  }

  filter(query: string) { 
    let filteredProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) :
      this.products;

    this.initializeTable(filteredProducts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }


}
