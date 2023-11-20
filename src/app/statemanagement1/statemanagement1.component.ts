import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-statemanagement1',
  templateUrl: './statemanagement1.component.html',
  styleUrls: ['./statemanagement1.component.css']
})
export class Statemanagement1Component {
  constructor(public contactService:ContactService){}
   array=[
    { id:1,firstname:'Ruth',lastname:'Babatola'},
    {id:1,firstname:'Sewa',lastname:'Bola'},
    {id:1,firstname:'Johnson',lastname:'Jewel'},
    {id:1,firstname:'Peter',lastname:'Grace'}
   ]
   updateItemDetails(list:any){
this.contactService.getDetails.next(list);
   }
}
