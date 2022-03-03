import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 invalidLogin!: boolean;
  constructor(private router:Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }
  signIn(credentials: any){
    this.authService.login(credentials).subscribe(result =>{
      console.log("map", result);
      // if(result)
      // this.router.navigate(['/']);
      // else
      // this.invalidLogin = true;
    })
  }
     
}
