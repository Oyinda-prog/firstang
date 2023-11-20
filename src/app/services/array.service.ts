import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 interface BudgetInterface{
  firstname:string,
  lastname:string,
  email:string,
  phonenumber:string,
 }
@Injectable({
  providedIn: 'root'
})
export class ArrayService {
   public bhvState= new BehaviorSubject <BudgetInterface>({
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:''
   });
   numberarray:any=[24,25,57]
   nameArray:number[]=[1,2,3,4,5,6,7,8,9]

   public  names:string[]=['Olu','Shola','Teslim','Victor','Oyin']

  constructor(public apihttp:HttpClient) { }
  getnumberarray(){
   return this.numberarray
  }
   getArray(){
    return this.nameArray
   }
   getContact(){
    return JSON.parse(localStorage['contactDetails'])
   }
   getApi(){
    return this.apihttp.get('http://api.github.com/users')
   }
   getNames(){
    return this.names
   }
   getbudget(){
    return JSON.parse(localStorage['budget'])
   }
}
