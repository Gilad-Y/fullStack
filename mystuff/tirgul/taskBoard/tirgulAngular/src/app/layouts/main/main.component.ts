import { Component, OnInit } from '@angular/core';
import { TasksDataService } from 'src/app/services/tasks-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasksData:any=""
 constructor(private taskService:TasksDataService){}
  ngOnInit(): void {
   this.taskService.getData().subscribe(data=>{
    this.tasksData=data
    console.log(this.tasksData)
   })
   
 }
}
