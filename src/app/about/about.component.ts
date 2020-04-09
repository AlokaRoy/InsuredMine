import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  askForLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('userName')===null || sessionStorage.getItem('userName')===undefined)
    {
      this.askForLogin = true;
    }
    else {
      this.askForLogin = false;
    }
  }

  login() { 
    document.getElementById('loginLink').click();
  }

}
