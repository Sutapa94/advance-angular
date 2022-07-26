import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { NewformComponent } from './MyComponents/home/newform/newform.component';
import { DefaultComponent } from './MyComponents/home/default/default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextShortPipe } from './Pipe/text-short.pipe';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { LoadingSpinnerComponent } from './MyComponents/shared/loading-spinner/loading-spinner.component';
import { SignUpInterceptorService } from './MyComponents/shared/Auth Service/sign-up-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    NewformComponent,
    DefaultComponent,
    TextShortPipe,
    SignUpComponent,
    LoginComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS , 
      useClass:SignUpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
