import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { DefaultComponent } from './MyComponents/home/default/default.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NewformComponent } from './MyComponents/home/newform/newform.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,children:[
    {path:"",component:DefaultComponent},
    {path:"form",component:NewformComponent},
  ]},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
