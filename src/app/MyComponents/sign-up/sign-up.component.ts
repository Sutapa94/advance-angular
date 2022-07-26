import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../shared/Auth Service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isLoading:boolean=false;
  error:string=null;

  signUpForm:FormGroup = new FormGroup({});
  

  constructor(private FB : FormBuilder, private service : SignUpService , private router : Router) {}

  ngOnInit(): void {
    this.signUpForm = this.FB.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password : [null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword : [null,Validators.required]
    },
    {
      validators: this.passwordMatch('password','confirmPassword')
    }
    )
  }

  //Custom Validator
  

  // confirmPasswordRequired(controls : FormControl): {[key:string]:boolean}{
  //   if(!controls.value){
  //     return ({'confirmPasswordRequired' : true})
  //   }
  //   else{
  //     return null;
  //   }
  // }

  passwordMatch(password:any,confirmPassword:any) {
    return (formGroup : FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if(confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMatch']){
        return;
      }
      if(passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({passwordMatch : true});
      }else{
        confirmPasswordControl.setErrors(null);
      }
    };
  }
  get f(){
    return this.signUpForm.controls;
  }

  onSignUp(){
    console.log(this.signUpForm);
    const email = this.signUpForm.value.email
    const password = this.signUpForm.value.password
    this.isLoading = true;
    this.service.signUp(email,password).subscribe(resData => {
      console.log(resData);
      this.isLoading=false;
      this.router.navigate(['/home']);
    },errorMsg => {
      this.error= errorMsg;
      this.isLoading=false;
    })
    this.signUpForm.reset();
  }

}
