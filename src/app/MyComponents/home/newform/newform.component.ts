import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  // @Input() title:string;
  genders=["Male","Female"];
  title:string
  newForm : FormGroup;

  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.title = this.service.title
    this.newForm = new FormGroup({
      'userData' : new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'email' : new FormControl(null,[Validators.required , Validators.email])
      }),      
      'about' : new FormControl(null),
      'gender' : new FormControl(null,Validators.required),
    });
  }

  onSubmit(){
    console.log(this.newForm.status);
  }

}
