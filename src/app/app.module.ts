import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { ManageblogComponent } from './manageblog/manageblog.component';
import { CreateblogComponent } from './createblog/createblog.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HomeComponent,
    ManageblogComponent,
    CreateblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




  
    
  