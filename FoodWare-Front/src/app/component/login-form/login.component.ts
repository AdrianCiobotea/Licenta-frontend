import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  authStatus!: string;
  model = new User();
  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }
  validateUser(loginForm: NgForm) {
    this.authService.validateLoginDetails(loginForm).subscribe((response: any) => {
      console.log(response);
      if (!response && !response["token"]) {
        this.invalidLogin = true;
      } else {
        localStorage.setItem("token", response);
        this.invalidLogin = false;
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(["/products"]);
      }

    });
  }

}
