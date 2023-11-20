import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface ItemInterface{
  name:string,
  price:number,
  quantity:number,
}
@Injectable({
  providedIn: 'root'
})
export class StateService {
// public itemDetails=new BehaviorSubject(ItemInterface); 
public itemDetails = new BehaviorSubject<ItemInterface>({
  name: '',
  price: 0,
  quantity:0
});
  constructor() { }
   
}
