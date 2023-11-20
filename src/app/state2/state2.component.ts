import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
interface ItemInterface{
  name:string,
  price:number,
  quantity:number,
}

@Component({
  selector: 'app-state2',
  templateUrl: './state2.component.html',
  styleUrls: ['./state2.component.css']
})
export class State2Component {
  itemObj:ItemInterface={
      name:'',
      price:0,
      quantity:0,
  }
  constructor(public getItemService:StateService){}
   ngOnInit(){
   this.getItems()
   }
   getItems(){
   this.getItemService.itemDetails.subscribe(data=>{
    console.log(data);
    this.itemObj=data
    
   },(error)=>{
    console.log(error);
    
   })
   }
}
