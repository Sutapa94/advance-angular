import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { DefaultComponent } from './MyComponents/home/default/default.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NewformComponent } from './MyComponents/home/newform/newform.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignUpGuard } from './MyComponents/shared/Auth Service/sign-up.guard';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"home",component:HomeComponent,
   canActivate : [SignUpGuard],
   children:[
    {path:"",component:DefaultComponent},
    {path:"form",component:NewformComponent},
  ]},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
