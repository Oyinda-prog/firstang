import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
interface Listinterface{
  name:string,
  amount:number,
  availability:string
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   constructor(public http:HttpClient){}
   public behaviour=new BehaviorSubject<Listinterface>(
    {name:'',
     amount:0,
    availability:''}
   )
   
   public receiveApi(){
    return this.http.get('https://api.github.com/users')
   }
 public  getApi(){
    return this.http.get('https://api.github.com/users')
  }
  
}
  

