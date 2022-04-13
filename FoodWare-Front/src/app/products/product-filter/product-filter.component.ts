import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  categories$!: Observable<Category[]>;
  groups$ : Observable<Group[]>;
  @Input('categoryId') categoryId: any;
  @Input('groupId') groupId :any = 0;

  constructor(categoryService: CategoryService,groupService: GroupService, route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      if(params['group']){
        if(params['category'])
        {
          this.categoryId=params['category'];
        }
        this.groupId = params['group'];
        this.categories$ = categoryService.getCategoriesByGroupId(params['group']);
      } else {
        this.groupId = 0;
      }
    });
    this.groups$ = groupService.getGroups();
    
  }

  ngOnInit(): void {
  }

}
