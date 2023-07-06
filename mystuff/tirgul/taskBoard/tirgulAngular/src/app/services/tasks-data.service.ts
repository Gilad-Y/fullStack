import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
data:any;
tasksUrl="http://localhost:4000/api/v1/taskboard/getAllTasks"
addUrl="http://localhost:4000/api/v1/taskboard/addNewTask"
  constructor(private http:HttpClient,private router:Router) { }
  getData(){
    return this.data=this.http.get(this.tasksUrl);
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
}
