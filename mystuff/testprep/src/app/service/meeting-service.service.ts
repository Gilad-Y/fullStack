import { HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
meetingsData:any=[];
teamsData:any=[];
  constructor(private http:HttpClient) { }
  getMeeting(){
    return this.meetingsData=this.http.get("http://localhost:4000/api/v1/dev/getAllMeetings")
    // return this.meetingsData
  }
  getTeams(){
    return this.teamsData=this.http.get("http://localhost:4000/api/v1/dev/getAllTeams")
  }
  addMeeting(data:any){
    this.http.post("http://localhost:4000/api/v1/dev/addMeeting",data).subscribe()
  }
}
