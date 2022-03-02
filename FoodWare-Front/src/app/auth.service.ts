import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  login(credentials: any){
    return this.http.post('http:/localhost:8080/login',JSON.stringify(credentials))
    .pipe(map(response=>{
      console.log(credentials);
    }))
  }
}
