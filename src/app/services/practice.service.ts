import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface Service{
  name:string,
  price:number,
  availability:string

}
@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  public subjectBehaviour= new BehaviorSubject<Service>(
   {
    name:'',
    price:0,
    availability:'Not available'
   }
  )
  constructor(public api:HttpClient) { }
  public array:any=[1,2,3,4]

  getArray(){
return this.array
  }
  getApi(){
    
    return JSON.parse(localStorage['contactDetails'])
  }
  getapi(){
    return this.api.get('https://api.github.com/users')
  }

}
