import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface ContactInterface{
  Firstname:string,
  Lastname:string,
  Email:string,
  Phoneno:string,
  Address:string,
  }
@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent {
  constructor(public actRoute:ActivatedRoute, public routes:Router){}
  contactIndex:number=1;
  contactObject:ContactInterface={
    Firstname:'',
    Lastname:'',
    Email:'',
    Phoneno:'',
    Address:''
  }


 ngOnInit(){
  let contactArray=JSON.parse(localStorage['contactDetails'])
  console.log(this.contactIndex);
  
  // console.log(contactArray);
  // console.log(this.actRoute.snapshot.params['id']);

      this.contactIndex=this.actRoute.snapshot.params['id']
    //  console.log(this.contactIndex);
     
          contactArray[this.contactIndex] 
          this.contactObject= contactArray[this.contactIndex]   
          console.log(this.contactObject);
          if(! this.contactObject){
            this.routes.navigate(['contact'])
          }
          
  // this.contactObject= contactArray.find((contact:ContactInterface,index:number)=>this.contactIndex==index);
  // console.log(this.contactObject);
  

  
  
 }
}
