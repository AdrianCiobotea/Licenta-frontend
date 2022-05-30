import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/constants/app.constants';
import { User } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

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
  validateLoginDetails(loginForm: any) {
    return this.http.post("http://localhost:8085/user/login", JSON.stringify(loginForm), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
  registerUser(registerForm: any) {
    return this.http.post('http://localhost:8085/user/register', JSON.stringify(registerForm), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
