import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  login(credentials: any){
    return this.http.post('http://localhost:8080/login',JSON.stringify(credentials),  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    .pipe(
      map((response: any) => {
        console.log("map", credentials);
      }),
      catchError(e => {
        console.log("the error", e);
        return e;
      })
    )
  };
}
