import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDetailsService } from '../services/user-details.service';
import { UserDetails } from '../models/userDetails';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('close') close: ElementRef;
  userName: string;
  selectedTab: number;
  loginSuccess: boolean = false;
  showErrorMsg: boolean = false;
  userDetails : UserDetails[];
  loginForm = new FormGroup({
    userId: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private userDetailsService: UserDetailsService, 
    private loginService: LoginService,
    private route: Router) { }

  get userId() { return this.loginForm.get('userId'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
    this.selectedTab = 1;
    this.userDetailsService.getUserDetails().subscribe(data => {
      this.userDetails = data;
    })
  }

  selectTab(selectedTab: number) {
    this.selectedTab = selectedTab;
    if(this.selectedTab === 2) {
      this.loginForm.reset();
      this.showErrorMsg = false;
    }
  }

  closeLoginModal() {
    this.selectedTab = 1;
    //this.resetLoginModal();
  }

  submitCredentials() {
    this.userDetails.forEach(user => {
      if(this.loginForm.value.userId === user.userId && this.loginForm.value.password === user.password) {
        this.userName = user.userName;
        this.loginSuccess = this.loginService.setUserName(this.userName);
        if(this.loginSuccess) {
          this.close.nativeElement.click();
          this.selectedTab = 2;
          this.route.navigate(['/gallery']);
        }
      }
    });
    if(!this.loginSuccess) {
      this.showErrorMsg = true;
    } 
    //this.resetLoginModal();
  }

  resetLoginModal() {
    this.loginForm.value.userId = "";
    this.loginForm.value.password = "";
    this.showErrorMsg = false;
  }

  logout() {
      this.selectedTab = 1;
      this.loginSuccess = false;
      sessionStorage.clear();
      this.route.navigate(['/home']);
  }
}
