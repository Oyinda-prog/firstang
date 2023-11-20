import { Component } from '@angular/core';
import { NewapiService } from '../services/newapi.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  constructor(public newapi:NewapiService){}
public first_name=''
public last_name=''
public email=''
public password=''
public receivename=''
public receivenames:string[]=[]
ngOnInit(){
  console.log(this.newapi.school);
  // this.receivename=this.newapi.getname()
 
  console.log(this.receivenames);
  
  
}
}
