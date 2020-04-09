import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setUserName(userName: string) {
    sessionStorage.setItem('userName', userName);
    return true;
  }

}

