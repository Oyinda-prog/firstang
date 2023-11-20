import { Component } from '@angular/core';
import { CreatecontactService } from '../services/createcontact.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-statemangement2',
  templateUrl: './statemangement2.component.html',
  styleUrls: ['./statemangement2.component.css']
})
export class Statemangement2Component {
  constructor(public contactService:ContactService){}
  ngOnInit(){
  this.getItemDetails()
  }
  getItemDetails(){
    this.contactService.getDetails.subscribe(response=>{
      console.log(response);
      
    })
  }
}
