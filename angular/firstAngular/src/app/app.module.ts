import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MainComponent } from './Layout/main/main.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { GreenDirective } from './dir/green.directive';
import { UserResultDirective } from './dir/user-result.directive';
import { BetterDirective } from './dir/better.directive';
import { LazyDirective } from './dir/lazy.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    GreenDirective,
    UserResultDirective,
    BetterDirective,
    LazyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
