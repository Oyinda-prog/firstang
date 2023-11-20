import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface New{
  name:string,
  age:number,
  color:string
}

@Injectable({
  providedIn: 'root'
})
export class GetApiServiceService {
  public school=''
  public behaviour=new BehaviorSubject<string>(
    this.school='Hello'
  )

  constructor(public getApi:HttpClient) { }
    getApiArray(){
      return this.getApi.get('http://jsonplaceholder.typicode.com/users')
    }

}
