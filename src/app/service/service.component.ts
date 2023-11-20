import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ApiService } from '../services/api.service';
interface Listinterface{
  name:string,
  amount:number,
  availability:string
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  constructor(public api:ApiService){}
   listarray:Listinterface[]=[{
    name:'rice',
    amount:200,
    availability:'available'
   },
   {
    name:'Beans',
    amount:1000,
    availability:'not-available'
   },
   {
    name:'Yam',
    amount:20000,
    availability:'available'
   },
   {
    name:'Potato',
    amount:3000,
    availability:'not-available'
   },
  ]
  ngOnInit(){
    console.log(this.api.behaviour);
  }
  sendItem(items:Listinterface){
    console.log(items);
    this.api.behaviour.next(items)
  }
}
