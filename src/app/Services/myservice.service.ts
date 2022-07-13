import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  title:string="Welcome to Angular Reactive Form";

  constructor(private http : HttpClient) { }

  addUser(user){
    return this.http.post('https://advancenewform-default-rtdb.firebaseio.com/posts.json',user)
  }

}
