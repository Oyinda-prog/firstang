import { Component } from '@angular/core';
interface BudgetInterface{
  firstname:string,
  lastname:string,
  email:string,
  phonenumber:string,
 }
@Component({
  selector: 'app-budgetapp',
  templateUrl: './budgetapp.component.html',
  styleUrls: ['./budgetapp.component.css']
})
export class BudgetappComponent {
email=""
firstname=''
lastname='' 
phonenumber='' 
userarray:BudgetInterface[]=[]
ngOnInit(){
  if(localStorage['budget']){
 this.userarray=JSON.parse(localStorage['budget'])
  }
}

submit(){
  console.log(5);
  
  let userobject={
    firstname:this.firstname,
  lastname:this.lastname,
   email:this.email,
   phonenumber:this.phonenumber
   }
   console.log(userobject);
   
  //  this.userarray.push(userobject)
  console.log(this.userarray);
  // localStorage.setItem('budget',JSON.stringify(this.array))
}
}
