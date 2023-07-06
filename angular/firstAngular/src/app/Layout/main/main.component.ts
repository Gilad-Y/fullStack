import { Component } from '@angular/core';
import { BirthdayService } from 'src/app/service/birthday.service';
import { NamesService } from 'src/app/service/names.service';

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
  color=false;
  styleColor='black';
  time=new Date().toLocaleTimeString()
  naruto=['naruto','sasuke','jiraya','itachi'];
  inputVal=""
  name=["hello"];
  birthdayData:any=[];
  constructor(private names:NamesService, private birthday:BirthdayService){
    this.name=names.getNames()
    this.birthdayData=birthday.getBirthday()
  }
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
  switchColor(){
    this.color=!this.color;
    this.styleColor=(this.color)?'yellow':'black'
  }
  clock=setInterval(()=>{
    // console.log(new Date().toLocaleTimeString())
    this.time=new Date().toLocaleTimeString()
  },1000)
  addName(){
    this.names.addName(this.inputVal)
    this.inputVal=""
  }
}
