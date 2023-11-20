import { Component } from '@angular/core';
import { ArrayService } from '../services/array.service';
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

@Component({
  selector: 'app-budget1',
  templateUrl: './budget1.component.html',
  styleUrls: ['./budget1.component.css']
})
export class Budget1Component {
constructor(public  arrayserv:ArrayService, public cons:GetApiServiceService){}
names=''
BudgetArray: BudgetInterface[]=[]
obj:New={
  name:'',
  age:0,
  color:''
}
ngOnInit(){
  console.log('hi');
  
    // this.BudgetArray= this.arrayserv.getbudget();

    //  console.log(this.BudgetArray);
    console.log(this.cons.behaviour.subscribe(data=>{
      this.names=data;
      console.log(this.names);
      
      
    },(error=>{
      console.log(error);
      
    })));
    

}
getBudget(budget:BudgetInterface,i:any){
  // console.log(i);
  localStorage.setItem('index',i)
  
 this.arrayserv. bhvState.next(budget)
}
}
