import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainComponent } from './layouts/main/main.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Page404Component } from './pages/page404/page404.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { CenterComponent } from './layouts/center/center.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    SingleTaskComponent,
    CenterComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
