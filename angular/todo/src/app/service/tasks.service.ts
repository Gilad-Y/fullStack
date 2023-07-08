import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private listData: any[] = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")!) : [];
  private listDataSubject = new BehaviorSubject<any[]>(this.listData);

  constructor() { }

  getData() {
    return this.listDataSubject.asObservable();
  }

  addTask(newTask: any) {
    newTask.id = this.listData.length + 1;
    newTask.checked = false;
    this.listData.push(newTask);
    this.updateStorage();
    this.listDataSubject.next(this.listData);
    console.log(this.listData);
  }

  removeTask(ids: number[]) {
    this.listData = this.listData.filter(item => !ids.includes(item.id));
    console.log(this.listData);
    this.updateStorage();
    this.listDataSubject.next(this.listData);
  }

  updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.listData));
  }
}
