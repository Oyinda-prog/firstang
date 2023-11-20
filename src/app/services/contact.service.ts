import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http:HttpClient) { }


   public getDetails=new BehaviorSubject({})
   
  public getContact(){
    return JSON.parse(localStorage['contactDetails'])
  }
  public returnApi(){
    return this.http.get('https://api.github.com/users')
  }
}
