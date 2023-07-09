import { Component } from '@angular/core';
import { AccountsService } from 'src/app/service/accounts.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent {
accountNumber:string='';
actionType:string="";
amount:number=0;
interest:number=0;
payments:number=0;
action:any={};
alert:any='';
constructor(private accountService:AccountsService){}
chooseAction(event:any){
  this.actionType=event.target.value;
    console.log(this.actionType)
}
addDepositWithdraw(){
  if(this.actionType!=''&&this.amount>0&&this.accountNumber!=''){
    this.action.Type=this.actionType;
    this.action.accountNumber=this.accountNumber;
    this.action.data=this.amount;
    this.accountService.addAction(this.action).subscribe();
    this.action={}
    this.alert=`
    <div class="alert alert-success alert-dismissible fade show text-center" role="alert">
    action listed
  </div>`;
  setTimeout(() => {
    this.alert="";
  }, 5000)
  }else{ 
    this.alert=`
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
    fill all the information please
  </div>`;
  setTimeout(() => {
    this.alert="";
  }, 5000)
  }
}
addLoan(){
  if(this.amount>0&&this.accountNumber!=''&&this.interest>0&&this.payments>0){
    this.action.Type=this.actionType;
    this.action.accountNumber=this.accountNumber;
    this.action.data=JSON.stringify({"amount":this.amount,
  "payments":this.payments,
  "interest":this.interest
  }).replace(/[{}"]/g, '');
  this.accountService.addAction(this.action).subscribe();
  this.action={}
  this.alert=`
    <div class="alert alert-success alert-dismissible fade show text-center" role="alert">
    action listed
  </div>`;
  setTimeout(() => {
    this.alert="";
  }, 5000)
  }else{ 
    this.alert=`
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
    fill all the information please
  </div>`;
  setTimeout(() => {
    this.alert="";
  }, 5000)
  }
}
}
