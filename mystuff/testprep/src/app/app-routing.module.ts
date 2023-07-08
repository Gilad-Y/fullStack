import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { AddmeetingComponent } from './pages/addmeeting/addmeeting.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {path:"",component:MeetingsComponent},
  {path:"addMeeting",component:AddmeetingComponent},
  {path:"**",component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
