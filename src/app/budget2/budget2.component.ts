import { Component } from '@angular/core';
import { ArrayService } from '../services/array.service';
import { PracticeService } from '../services/practice.service';
import { GetApiServiceService } from '../services/get-api-service.service';
interface BudgetInterface{
  firstname:string,
  lastname:string,
  email:string,
  phonenumber:string,
 }
 interface New{
  name:string,
  age:number,
  color:string
}
 interface Service{
  name:string,
  price:number,
  availability:string

}
@Component({
  selector: 'app-budget2',
  templateUrl: './budget2.component.html',
  styleUrls: ['./budget2.component.css']
})
export class Budget2Component {
 public name='oyindamola'
//  constructor(public bhv:ArrayService){}
resObject:Service={
  name:'',
  price:0,
  availability:''
}
constructor(public service:PracticeService, public cons:GetApiServiceService){}
ngOnInit(){
this.service.subjectBehaviour.subscribe(response=>{
 this.resObject= response;
 console.log(this.resObject);
 
    
  });
  
}


obj:BudgetInterface={
  firstname:'',
  lastname:'',
  email:'',
  phonenumber:''
}
firstname1=''
lastname1=''
email1=''
phonenumber1=''
// ngOnInit(){
//   console.log(this.bhv.bhvState.subscribe(response=>{

// this.obj=response
// console.log(this.obj);

//   },(error)=>{
//     console.log(error);
    
//   }));
  
// }
// edit(){
//   console.log(this.phonenumber1);
//    this.obj.firstname=this.firstname1
//    this.obj.lastname=this.lastname1
//   this.obj.email=this.email1
//    this.obj.phonenumber=this.phonenumber1
//    console.log(this.obj);
//   localStorage.setItem('budget',JSON.stringify(this.obj))
  
   
  
// }
delete(){
  let i=JSON.parse(localStorage['index'])
  var array=JSON.parse(localStorage['budget'])
  // console.log(budgetarray[i]);
  array.splice(i,1)
  localStorage.setItem('budget',JSON.stringify(array))
  
  
  
}

newarray:New[]=[
  {
    name:'Ruth',
    age:20,
    color:'red'
  },
  {
    name:'Dami',
    age:70,
    color:'orange'
  },
  {name:'Ruth',
  age:27890,
  color:'yellow'},
]
sends(){
  console.log(this.cons.behaviour);
  this.cons.behaviour.next(this.name)
}
}
