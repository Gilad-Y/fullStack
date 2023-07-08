import { Component, OnInit } from '@angular/core';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  listData:any[]=[];
  newTask:any={};
  constructor(private taskService:TasksService){}
  ngOnInit(): void {
    this.taskService.getData().subscribe(updatedListData => {
      this.listData = updatedListData;
      console.log(this.listData);
    });
  }
addTask(){
this.taskService.addTask(this.newTask)
this.newTask={};

}
}
