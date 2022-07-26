import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "../user.model";

interface ResponseData{
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    kind:string;
    registered?:boolean;
}

@Injectable({
    providedIn:"root"
})

export class SignUpService{
    user = new BehaviorSubject<User>(null);

    constructor(private http : HttpClient , private router : Router){}

    signUp(email:string,password:string){
        return this.http.post<ResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2VgMbM_cv782jafOZD3ofSr9TNVIhO1U",
            {
                email:email,
                password:password,
                returnSecureToken:true
            }).pipe(
                catchError(this.handleError), 
                tap(resData => {
                    this.handleAuthentication(
                        resData.email,
                        resData.idToken,
                        resData.localId,
                        +resData.expiresIn
                    )
                })
              );
    }


    login(email:string,password:string){
        return this.http.post<ResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2VgMbM_cv782jafOZD3ofSr9TNVIhO1U",
            {
                email:email,
                password:password,
                returnSecureToken:true
            }).pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentication(
                        resData.email,
                        resData.idToken,
                        resData.localId,
                        +resData.expiresIn
                    )
                })
            );
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/login'])
    }

    private handleAuthentication(email:string , token:string , localId:string, expiresIn:number){
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        const user = new User(
                    email,
                    localId,
                    token,
                    expirationDate
                );
        this.user.next(user);
    }

    private handleError(errorRes : HttpErrorResponse){
        let errorMsg = "Unknown Error occured";
                if(!errorRes.error || !errorRes.error.error){
                    return throwError(errorMsg)
                }
                switch(errorRes.error.error.message){
                    case 'EMAIL_EXISTS' :
                        errorMsg = " This Email exists already";
                        break;
                    case 'EMAIL_NOT_FOUND' :
                        errorMsg = "This Email is Invalid";
                        break;
                    case "INVALID_PASSWORD" :
                        errorMsg = " Password is Invalid";
                        break;
                }
                return throwError(errorMsg)
    }
}