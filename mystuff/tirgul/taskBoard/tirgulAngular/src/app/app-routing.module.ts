import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
{path:"",component:MainComponent},
{path:"addTask",component:AddTaskComponent},
{path:"**",component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
