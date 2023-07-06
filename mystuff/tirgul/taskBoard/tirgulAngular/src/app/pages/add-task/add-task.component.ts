import { Component } from '@angular/core';
import { TasksDataService } from 'src/app/services/tasks-data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private taskService:TasksDataService){}
  task:any={};
  // taskContent='';
  // taskType='';
addTask(){
console.log("data is",this.task.content,this.task.type)
this.taskService.addTask(this.task)
}
}
