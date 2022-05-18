import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Extra } from 'src/app/model/extra.model';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  constructor(private http:HttpClient) { }
  getExtrasByCategoryId(categoryId: number): Observable<Extra[]> { 
    return this.http.get<Extra[]>('http://localhost:8084/extra?categoryId='+categoryId);
  }
}
