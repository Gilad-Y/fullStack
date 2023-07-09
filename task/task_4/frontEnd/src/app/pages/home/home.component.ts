import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/service/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
accountNumber:string='';
data:any[]=[];
alert:string='';
constructor(private accountService:AccountsService){}
ngOnInit(): void {
}
getData(){
console.log(this.accountNumber)
this.accountService.getAccountInfo(this.accountNumber).subscribe
 ((res:any)=>{this.data=res
console.log(this.data)
}
,(err: any) => {
  console.log(err);
  this.alert = `
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
     please provide account number
    </div>
  `;
  setTimeout(() => {
    this.alert="";
  }, 5000)
  
}

)
if(this.data.length<1&&this.accountNumber!=""){
  this.alert = `
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
      there are no actions on this account
    </div>
  `;
  setTimeout(() => {
    this.alert="";
  }, 5000)
}
this.accountNumber=""
}
}
