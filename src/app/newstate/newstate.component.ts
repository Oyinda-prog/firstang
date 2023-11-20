import { Component } from '@angular/core';
import { NewstateService } from '../services/newstate.service';
interface FoodInterface{
  name:string,
  price:number,
  quantity:number,
  category:string,
  availability:string
}

@Component({
  selector: 'app-newstate',
  templateUrl: './newstate.component.html',
  styleUrls: ['./newstate.component.css']
})
export class NewstateComponent {
  constructor(public itemService:NewstateService){}
  public comment=''
   public foodItems:FoodInterface[]=[
    {
      name:'rice',
      price:10000,
      quantity:3,
      category:'Foodstuff',
      availability:'available'
    },
    {
      name:'Yam',
      price:1500,
      quantity:10,
      category:'Foodstuff',
      availability:'available'
    },
    {
      name:'Beans',
      price:25000,
      quantity:2,
      category:'Foodstuff',
      availability:'not-available'
    },
    {
      name:'Mango',
      price:3000,
      quantity:30,
      category:'Fruit',
      availability:'available'
    },
    
   ]
   ngOnInit(){
    // console.log(this.itemService);
    
   }
   sendItem(item:FoodInterface){
    this.itemService.subBehaviour.next(item)  
   }
}
