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
  selector: 'app-newstate2',
  templateUrl: './newstate2.component.html',
  styleUrls: ['./newstate2.component.css']
})
export class Newstate2Component {
itemObj:FoodInterface={
 name:'',
 price:0,
 quantity:0,
 category:'',
 availability:''
}

      constructor(public itemService:NewstateService){}
      ngOnInit(){
        this.itemService.subBehaviour.subscribe(data=>{
         this.itemObj=data
         console.log(this.itemObj);
         
          
        },(error)=>{
          console.log(error);
          
        })
        
      }
}
