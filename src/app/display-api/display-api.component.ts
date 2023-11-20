import { Component } from '@angular/core';
import { GetApiServiceService } from '../services/get-api-service.service';

@Component({
  selector: 'app-display-api',
  templateUrl: './display-api.component.html',
  styleUrls: ['./display-api.component.css']
})
export class DisplayApiComponent {
  constructor(public apiservice:GetApiServiceService){}  
  apiArray:any=[]

  ngOnInit(){
   this.apiservice.getApiArray().subscribe(response=>{
    this.apiArray=response;
    console.log(this.apiArray);
    
    
   },(error)=>{
    console.log(error);
    
   });
   
  }
}
