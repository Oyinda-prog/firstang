import { Component } from '@angular/core';
import { ArrayService } from '../services/array.service';
import { PracticeService } from '../services/practice.service';
interface Service{
  name:string,
  price:number,
  availability:string

}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
//  constructor(public nameService:ArrayService){}
 constructor(public practice:PracticeService){}

  total:Service[]=[
    {
      name:'Yam',
      price:6,
      availability:'available'
    },
    {
      name:'Beans',
      price:8,
      availability:'Not-available'  
    }
  
  ]
  check(item:Service){
this.practice.subjectBehaviour.next(item);
 
  }
}
