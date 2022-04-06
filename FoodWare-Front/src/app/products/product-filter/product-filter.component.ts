import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { Group } from 'src/app/model/group.model';
import { CategoryService } from 'src/app/service/category/category.service';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$ : Observable<Category[]>;
  groups$ : Observable<Group[]>;
  @Input('category') category: any;
  @Input('group') group :any;

  constructor(categoryService: CategoryService,groupService: GroupService) {
    this.categories$ = categoryService.getCategories();
    categoryService.getCategories().subscribe(result => {
      console.log('#### result', result);
    });
    this.groups$ = groupService.getGroups();
  }

  ngOnInit(): void {
  }

}
