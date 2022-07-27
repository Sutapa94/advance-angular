import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { SignUpService } from "./sign-up.service";

@Injectable({
    providedIn: "root"
})

export class SignUpGuard implements CanActivate{

    constructor(private signUpService : SignUpService , private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.signUpService.user.pipe(
            take(1),
            map( user => {
                const isAuth = !user ? false :true
                if(isAuth){
                    return true
                }
                return this.router.createUrlTree(['/login'])
            })
        );
    }
}