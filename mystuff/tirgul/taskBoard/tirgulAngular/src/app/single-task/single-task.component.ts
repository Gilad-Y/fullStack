import { Component, Input } from '@angular/core';
import { TasksDataService } from '../services/tasks-data.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent {
  constructor(private taskService:TasksDataService){}
@Input() tasksData :any
removeTask(id:number){
this.taskService.removeTask(id)
}
}
