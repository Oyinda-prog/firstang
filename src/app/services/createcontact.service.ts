import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatecontactService {


public  contactArray:number[]=[1, 22,23,34,45,56]
  constructor(public getapi:HttpClient) { }
  public itemDetails=new BehaviorSubject({})
 receiveapi(){
  this.getapi.get('http://jsonplaceholder.typicode.com/users')
 }
  getcontactArray(){
return this.contactArray
  }
  getcreateContactArray(){
   return JSON.parse(localStorage['contactDetails']) 
  }
}
