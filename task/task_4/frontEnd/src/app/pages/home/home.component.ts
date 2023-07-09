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
constructor(private accountService:AccountsService){}
ngOnInit(): void {
}
getData(){
console.log(this.accountNumber)
this.accountService.getAccountInfo(this.accountNumber).subscribe
 ((res:any)=>{this.data=res
console.log(this.data)
})
this.accountNumber=""
}
}
