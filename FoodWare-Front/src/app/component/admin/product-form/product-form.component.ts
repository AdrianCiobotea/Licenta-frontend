// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CategoryService } from 'src/app/category.service';
// import { ProductService } from 'src/app/product.service';
// import { take } from 'rxjs/operators';

// @Component({
//   selector: 'app-product-form',
//   templateUrl: './product-form.component.html',
//   styleUrls: ['./product-form.component.css']
// })
// export class ProductFormComponent implements OnInit {

//   categories$;
//   product = {}; 
//   id!:any;

//   constructor(
//     private router: Router, 
//     private route: ActivatedRoute,
//     private categoryService: CategoryService, 
//     private productService: ProductService) {
//     this.categories$ = categoryService.getCategories();

//     this.id = this.route.snapshot.paramMap.get('id');
//     if (this.id) this.productService.get(this.id).pipe(take(1)).subscribe((p: {}) => this.product = p);
//   }

//   save(product: any) { 
//     if (this.id) this.productService.update(this.id, product);
//     else this.productService.create(product);
    
//     this.router.navigate(['/admin/products']);
//   }

//   delete() {
//     if (!confirm('Are you sure you want to delete this product?')) return;
    
//     this.productService.delete(this.id);
//     this.router.navigate(['/admin/products']);
//   }

//   ngOnInit() {
//   }
// }
