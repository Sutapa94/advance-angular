import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup = new FormGroup({});
  

  constructor(private FB : FormBuilder) {}

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
  }

}
