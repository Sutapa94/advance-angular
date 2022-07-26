import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpService } from '../MyComponents/shared/Auth Service/sign-up.service';
import { User } from '../MyComponents/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  title:string="Welcome to Angular Reactive Form";

  constructor(private http : HttpClient) { }

  addUser(user :User){
    // return this.signupService.user.pipe(
    //   take(1),
    //   exhaustMap(user => {
    //     return this.http.post(
    //               'https://advancenewform-default-rtdb.firebaseio.com/posts.json',
    //               users,
    //               {
    //                 params:new HttpParams().set('auth',user.token)
    //               },
    //             );
    //   })
    //   )
    return this.http.post('https://advancenewform-default-rtdb.firebaseio.com/posts.json',user)
  }

}
