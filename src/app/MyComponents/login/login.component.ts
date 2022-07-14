import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({});  

  constructor(private FB : FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.FB.group({
      email:[null,[Validators.required,Validators.email]],
      password : [null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    }
    )
  }

  //Custom Validator

  

  

 
  

  onSwitch(){
    
  }

  onLogin(){
    console.log(this.loginForm);
    this.loginForm.reset();
  }

}

