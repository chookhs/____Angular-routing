import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }


  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('AuthGuardService canActivate return', this.authService.isLoggedIn);
    if(this.authService.isLoggedIn) {
      return true
    }
    else {
      this.authService.redirectUrl = state.url;
      console.log(this.authService.redirectUrl)
    this.router.navigate(['login']);
    return false
    }
  }
}
