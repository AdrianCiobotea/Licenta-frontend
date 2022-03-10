import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../constants/app.constants';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

 /*
  login(credentials: any){
    return this.http.post('http://localhost:8080/login',JSON.stringify(credentials),  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    .pipe(
      map((response: any) => {
        console.log("map", response);
      }),
      catchError(e => {
        console.log("the error", e);
        return e;
      })
    )
  };
  */
  validateLoginDetails(user: User) {
    window.sessionStorage.setItem("userdetails",JSON.stringify(user));
    return this.http.post(environment.rooturl + AppConstants.LOGIN_API_URL, { observe: 'response',withCredentials: true });
  }
}
