import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
names:any=[]
  constructor() { 
    this.names=["gilad","nir","naruto"];
  }
  getNames(){
    return this.names
  }
  addName(newName:any){
    this.names.push(newName)
  }
}
