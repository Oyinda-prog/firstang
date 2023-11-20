import { Component } from '@angular/core';
import { CreatecontactService } from '../services/createcontact.service';
interface ContactInterface{
  Firstname:string,
  Lastname:string,
  Email:string,
  Phoneno:string,
  Address:string,
  }
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  public showArray:number[]=[];
   public createContact:ContactInterface[]=[]
   constructor(public contactService:CreatecontactService){}
   ngOnInit(){

this.createContact=this.contactService. getcreateContactArray()
console.log(this.createContact);
 this.showArray=this.contactService.getcontactArray()
   
    
   }
}
