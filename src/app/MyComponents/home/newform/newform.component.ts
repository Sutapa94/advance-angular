import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  // @Input() title:string;
  genders=["Male","Female"];
  title:string;
  newForm : FormGroup;
  restrictName = ["Sam","Ryan"];
  restrictEmail = ["test@test.com","test1@test.com"];

  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.title = this.service.title
    this.newForm = new FormGroup({
      'userData' : new FormGroup({
        'name' : new FormControl(null,[Validators.required,this.restrictNamevalidator.bind(this)]),
        'email' : new FormControl(null,[Validators.required , Validators.email], this.restrictEmailValidator.bind(this))
      }),      
      'about' : new FormControl(null),
      'date' : new FormControl(null,Validators.required),
      'gender' : new FormControl(null,Validators.required),
      'hobbies' : new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.newForm.status);
    console.log(this.newForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.newForm.get("hobbies")).push(control);
  }

  getControls(){
    return (<FormArray>this.newForm.get('hobbies')).controls;
  }

  //Custom Validator
  //it will return like this : {"restrictName":true}
  restrictNamevalidator(controls : FormControl) : { [key:string] : boolean }{
    if(this.restrictName.indexOf(controls.value) !== -1){
      return {"restrictName" : true}
    }
    return null;
  }

  //Custom Async Validator
  restrictEmailValidator(controls : FormControl) : Promise<any> | Observable<any> {

    const promise = new Promise<any> ((resolve,reject) => {
      setTimeout(() => {
        if(this.restrictEmail.indexOf(controls.value) !== -1){
          resolve ({'restrictEmail' : true})
        }
        else{
          resolve(null)
        }
      },2000)
    });

    return promise

  }

}
