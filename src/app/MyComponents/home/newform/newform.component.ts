import { Component, Input, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  // @Input() title:string;
  title:string

  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.title = this.service.title
  }

}
