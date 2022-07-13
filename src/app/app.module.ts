import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { NewformComponent } from './MyComponents/home/newform/newform.component';
import { DefaultComponent } from './MyComponents/home/default/default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextShortPipe } from './Pipe/text-short.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    NewformComponent,
    DefaultComponent,
    TextShortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
