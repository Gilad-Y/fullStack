import { Component } from '@angular/core';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent {
accountNumber:string=''
action:string=""
amount:number=0;
interest:number=0;
payments:number=0;
chooseAction(event:any){
  this.action=event.target.value;
    console.log(this.action)
}
}
