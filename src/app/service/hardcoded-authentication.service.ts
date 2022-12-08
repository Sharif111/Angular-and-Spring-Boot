import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="admin" && password === '123') {
     // sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  constructor() { }
}
