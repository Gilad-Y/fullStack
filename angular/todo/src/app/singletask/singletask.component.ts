
import { Component, Input } from '@angular/core';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingletaskComponent {
@Input() listData:any[]=[]
constructor(private taskService:TasksService){}
checkBoxChange(item: any) {
  item.checked = !item.checked;
  this.taskService.updateStorage()
}
removeTasks(){
 this.taskService.removeTask(
  this.listData.filter(item => item.checked == true).map(item=>item.id)
  )
}
}
