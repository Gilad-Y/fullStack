import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {
birthdays:any=[{
  img:"",
  name:"gilad yitzhak",
  age:22,
  birthday:"2001-06-06",
},
{
  img:"",
  name:"nir yitzhak",
  age:15,
  birthday:"2008-02-18",
},
]
  constructor() {
  }
  getBirthday(){
    return this.birthdays;
  }
}
