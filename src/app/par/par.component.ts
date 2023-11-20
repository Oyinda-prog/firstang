import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
interface Listinterface{
  name:string,
  amount:number,
  availability:string
}
@Component({
  selector: 'app-par',
  templateUrl: './par.component.html',
  styleUrls: ['./par.component.css']
})
export class ParComponent {
    constructor(public api:ApiService){}
    public listobject:Listinterface={
    name:'',
    amount:0,
    availability:''
    }
  ngOnInit(){
 console.log(this.api.behaviour.subscribe(response=>{
  console.log(response);
  this.listobject=response
  
 },(error=>{
  console.log(error);
  
 })));
 
  }
}


