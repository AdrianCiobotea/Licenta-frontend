import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  public redirectUrl!: string;


  constructor(private http: HttpClient, private router: Router) { }

  validateLoginDetails(loginForm: any) {
    return this.http.post("http://localhost:8085/user/login", JSON.stringify(loginForm), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(map((res: any) => {
      if (res.token) {
        this.isLoggedIn = true;
        console.log(res["token"]);
        return res["token"];
      }
      return undefined;
    }));
  }
  registerUser(registerForm: any) {
    return this.http.post('http://localhost:8085/user/register', JSON.stringify(registerForm), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
  static getToken() {
    return localStorage.getItem("token");
  }
  logout() {
    this.isLoggedIn = false;
  }
}
