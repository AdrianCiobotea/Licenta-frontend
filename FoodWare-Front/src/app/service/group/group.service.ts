import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/model/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }
  getGroups(): Observable<Group[]> { 
    return this.http.get<Group[]>('http://localhost:8084/group');
  }
}
