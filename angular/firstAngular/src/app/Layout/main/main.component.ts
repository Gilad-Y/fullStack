import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  daddy1="cbum";
  daddy2="noel";
  type="password";
  myValue="";
  myAge=0;
  myColor="black";
  showData=false;
  showLoved(){
    return this.daddy1+' and '+this.daddy2;
  }
  onPassUpdate(event: { target:any }){
    this.myValue=event.target.value;
    console.log(this.myValue);
  }
  changeColor(event: any){
    console.log(event.target.value);
    this.myColor=event.target.value;
  }
}
