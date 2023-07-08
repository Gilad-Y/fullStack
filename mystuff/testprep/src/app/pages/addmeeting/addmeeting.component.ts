import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { MeetingServiceService } from 'src/app/service/meeting-service.service';

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit {
  teamsData:any=[];
  // selectedTeam='';
  newMeeting:any={};
  constructor(private meetingService:MeetingServiceService, private router:Router){}
  ngOnInit(): void {
    this.meetingService.getTeams().subscribe(data=>{
      this.teamsData=data
      console.log(this.teamsData)
    })
  }
  addMeeting(){
    console.log(this.newMeeting)
    this.meetingService.addMeeting(this.newMeeting)
    this.router.navigate(["/"])

  }
}
