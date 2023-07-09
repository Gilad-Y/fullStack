import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddActionComponent } from './pages/add-action/add-action.component';
import { Page404Component } from './pages/page404/page404.component';
import {HttpClientModule} from "@angular/common/http";
import { SingleActionComponent } from './pages/single-action/single-action.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddActionComponent,
    Page404Component,
    SingleActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
