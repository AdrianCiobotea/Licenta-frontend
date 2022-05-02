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
  constructor(private router:Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }
   validateUser(loginForm: NgForm) {
  //   this.authService.validateLoginDetails(this.model).subscribe(
  //          responseData => {
  //       window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization') || "");
  //       this.model = <any> responseData;
  //       this.model.authStatus = 'AUTH';
  //       window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
  //       this.router.navigate(['dashboard']);
  //     }, (error: any) => {
  //       console.log(error);
  //     });

  }
     
}