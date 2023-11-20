import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ArrayService } from '../services/array.service';
import { CreatecontactService } from '../services/createcontact.service';
import { ApiService } from '../services/api.service';
import { NewapiService } from '../services/newapi.service';
interface Obj{
  full_name:string,
  phone_number:string,
  address:string,
  email:string,
  password:string
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
constructor(public formbuilder:FormBuilder, public router:Router,  public newapi:NewapiService ){}
 public formgroup=this.formbuilder.group({
first_name:[''],
last_name:[''],
age:[''],
city:[''],
address:[''],
email:[''],
password:[''],
phone_number:[''],

})
// arrayname:any=[]
// public array:any=[]
ngOnInit(){
//  console.log(this.newapi);
// 
this.newapi.getapi().subscribe(data=>{
  // console.log(data);
  
},(error=>{
  console.log(error);
  
}))
 
 
}
signup(){
 this.newapi.signup(this.formgroup.value).subscribe(response=>{
 
     console.log(response);
    
  },(error)=>{
    console.log(error);
    
  });
  
//  this.array.push(this.formgroup.value)
//  console.log(this.array);
//  localStorage.setItem('user_details',JSON.stringify(this.array))
// this.router.navigate(['signin'])

//   this.formgroup.controls['full_name'].setValue('');
//   this.formgroup.controls['phone_number'].setValue('');
 
}
}
