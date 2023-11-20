import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinreactive',
  templateUrl: './signinreactive.component.html',
  styleUrls: ['./signinreactive.component.css']
})
export class SigninreactiveComponent {
  constructor(public router:Router){}
public email=''
public password=''
public array=[]
message=''
ngOnInit(){
if(localStorage['user_details']){
 this.array= JSON.parse(localStorage['user_details'])
 console.log(this.array);
 
 
}


  
}
login(){
let user= this.array.find((user:any)=>user.email==this.email && user.password==this.password)
if (user){
  localStorage.setItem('currentuser',JSON.stringify(user))
   this.router.navigate(['dashboard'])
}else{
  this.message='Invalid login details'
}

}
}
