import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { Category } from './model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategories(): Observable<Category[]> { 
    return this.http.get<Category[]>('http://localhost:8084/category');
  }
}
