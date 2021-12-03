import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userPassword = '123';
  userLogin = 'admin';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

    setMessage(): void {
  this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`
  }

  login(): void {
    this.message = 'Trying to log in...'
    this.authService.login(this.userLogin,this.userPassword)
      .subscribe((res: boolean) => {
      console.log('login subscribe result', res);
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin'
        this.router.navigate([redirect]);}
    });

  }

  logout():void
 {
   this.authService.logout();
 }
}
