import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { ApiService } from '../services/api.service';

interface ContactInterface{
Firstname:string,
Lastname:string,
Email:string,
Phoneno:string,
Address:string,
}

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {

  constructor(public contactRoutes:Router){}

  inputStyle='form-control my-2'
  public age:number=90
  public firstname="";
  public lastname=""
  public email="" 
  public phonenumber=""
  public address=""
  public contactArray:ContactInterface[]=[]
  public userArray:any=[]
    
  

 
  ngOnInit(){
    
   console.log(this.contactArray);}
   
    
  //   if(localStorage['contactDetails']){
  //     this.contactArray=this.service.getContact();
  //     // this.contactArray =JSON.parse(localStorage.getItem('contactDetails')!)
  //     // console.log(this.contactArray);
      
  //   }else{
  //     this.contactArray=[]
  //   }
  // }
  // getGithubApi(){
  //   this.apiService.getApi().subscribe(response=>{
  //     // console.log(response);
  //     this.userArray=response
  //     console.log(this.userArray);
      
      
  //   },(error)=>{
  //     console.log(error);
      
  //   })
  // }
  
  addContact(){
console.log(this.lastname);
let contactObject={
  Firstname:this.firstname,
  Lastname:this.lastname,
  Email:this.email,
  Phoneno:this.phonenumber,
  Address:this.address
}
console.log(contactObject)
this.contactArray.push(contactObject)
console.log(this.contactArray);
localStorage.setItem('contactDetails', JSON.stringify(this.contactArray))


  }
  deleteContact(index:number){

this.contactArray.splice(index,1)
localStorage.setItem('contactDetails', JSON.stringify(this.contactArray))
 
  }
  editContact(){
  if(this.age==90){
    this.contactRoutes.navigate(['editContact'])
    
  }
  }
}
