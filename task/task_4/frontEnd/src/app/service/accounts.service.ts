import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  data:any=""
  constructor(private http:HttpClient) { }
  getAccountInfo(number:string){
   return this.data=this.http.get(`http://localhost:4000/api/v1/account/getActions/${number}`)
  }
  addAction(action:any){
    return this.http.post("http://localhost:4000/api/v1/account/addAction",action)
  }
}
