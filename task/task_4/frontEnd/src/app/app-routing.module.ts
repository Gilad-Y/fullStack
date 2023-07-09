import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddActionComponent } from './pages/add-action/add-action.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"addAction",component:AddActionComponent},
  {path:"**",component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
