import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
data:any[]=[];
tasksUrl="http://localhost:4000/api/v1/taskboard/getAllTasks"
addUrl="http://localhost:4000/api/v1/taskboard/addNewTask"
  constructor(private http:HttpClient,private router:Router) { }
  getData(){
    return this.data=this.http.get(this.tasksUrl) as any;
  }
  addTask(data: any) {
    console.log(data);
    return this.http.post(this.addUrl, data).subscribe(response => {
      console.log('Task added:', response);
      this.router.navigate(['/'])
    }, error => {
      console.error('Error adding task:', error);
    });
  }
  removeTask(id:number){
    return this.http.delete(`http://localhost:4000/api/v1/taskboard/deleteTask/${id}`).subscribe(response=>{
      console.log("this task removed",id);
      this.data=this.data.filter((item:any)=>item.id!==id)
    },err=> console.log(err))
  }
}
