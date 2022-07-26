import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../shared/Auth Service/sign-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading:boolean=false;
  error:string=null;

  loginForm:FormGroup = new FormGroup({});  

  constructor(private FB : FormBuilder, private service : SignUpService , private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.FB.group({
      email:[null,[Validators.required,Validators.email]],
      password : [null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    }
    )
  }


  onLogin(){
    console.log(this.loginForm);
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    this.isLoading=true;
    this.service.login(email,password).subscribe(resData => {
      console.log(resData);
      this.isLoading=false;
      this.router.navigate(['/home']);
    },errorMsg => {
      this.error= errorMsg;
      this.isLoading=false;
    })
    this.loginForm.reset();
  }

}

