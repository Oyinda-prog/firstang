import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
interface ItemInterface{
  name:string,
  price:number,
  quantity:number,
}
@Component({
  selector: 'app-state1',
  templateUrl: './state1.component.html',
  styleUrls: ['./state1.component.css']
})
export class State1Component {
  constructor(public service:StateService){}
  items=[{
name:"Yam",
price:100,
quantity:3,
  },
  {
    name:"Yam",
    price:100,
    quantity:3,
      },
      {
        name:"Rice",
        price:200,
        quantity:4,
          },
          {
            name:"Pounded",
            price:300,
            quantity:5,
              }];
       updateItems(item:ItemInterface){
 this.service.itemDetails.next(item)
       }       
}
