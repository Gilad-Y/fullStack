import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-action',
  templateUrl: './single-action.component.html',
  styleUrls: ['./single-action.component.css']
})
export class SingleActionComponent {
@Input() data:any[]=[]
}
