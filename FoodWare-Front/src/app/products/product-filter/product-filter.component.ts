import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$ : Observable<Category[]>;
  @Input('category') category: any;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
    categoryService.getCategories().subscribe(result => {
      console.log('#### result', result);
    });
  }

  ngOnInit(): void {
  }

}
