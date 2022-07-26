import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignUpService } from './MyComponents/shared/Auth Service/sign-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  // homeVisiable:boolean=false;
  // aboutVisiable:boolean=false;
  // contactUsVisiable:boolean=false;

  // homeClick(){
  //   this.homeVisiable = true;
  //   this.aboutVisiable = false;
  //   this.contactUsVisiable = false;
  // }
  // aboutClick(){
  //   this.aboutVisiable = true;
  //   this.homeVisiable=false;
  //   this.contactUsVisiable = false;
  // }
  // contactusClick(){
  //   this.contactUsVisiable = true;
  //   this.aboutVisiable = false;
  //   this.homeVisiable=false;
  // }

  private userSub : Subscription;
  isAuthenticated :boolean=false;

  constructor(private signUpService : SignUpService){}

  ngOnInit(): void {
    this.userSub = this.signUpService.user.subscribe(user => {
      this.isAuthenticated= !user ? false : true;
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  logout(){
    this.signUpService.logout();
  }

}
