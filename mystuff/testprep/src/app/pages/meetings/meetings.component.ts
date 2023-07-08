import { Component, OnInit } from '@angular/core';
import { MeetingServiceService } from 'src/app/service/meeting-service.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit{
  meetingsData:any=[];
  teamsData:any=[];
  selectedTeam='';
  constructor(private meetingService:MeetingServiceService){}
  ngOnInit(): void {
    this.meetingService.getMeeting().subscribe(data=>{
      this.meetingsData=data
      console.log(this.meetingsData)
    })
    this.meetingService.getTeams().subscribe(data=>{
      this.teamsData=data
      console.log(this.teamsData)
    })
  }
  showMeetings(event: any){
    this.selectedTeam=event.target.value;
    console.log(this.selectedTeam)
    
  }

}
