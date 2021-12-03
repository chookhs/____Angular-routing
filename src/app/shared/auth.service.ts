import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string = '';

  constructor() { }

  login(login:string, password:string): Promise<boolean> | Observable<boolean> | any{

       // const delay = function () {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(true)
    //     }, 1000);
    //   })
    // }

    const result = of(true).pipe(delay(1000));


    // return delay().then((res: any) => {
    //   this.isLoggedIn = login === 'admin' && password === '123' ? res : false

    //   return this.isLoggedIn;
    // });

    return result.pipe(
      map((val: boolean) => login === 'admin' && password === '123' ? this.isLoggedIn = val : false)
    );


  }

  logout():void {
    this.isLoggedIn = false;
  }
}
