import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
interface MyForm {
   first_name: [string];
   lastname: [string];
   email: [string];
   password: [string];
   age: [number];
 }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
   
   constructor(public formbuilder:FormBuilder){}
    public first_name=''
    public lastname=''
    public email=''
    public phonenumber=''
    public age=''

  

    

     public forms= this.formbuilder.group({
        first_name:['', Validators.minLength(5)],
        lastname:['', Validators.required],
        email:['', Validators.email],
        password:[''],
        age:['']
     })

 


     public signupform=this.formbuilder.group({
     first_name:['',[Validators.minLength(6)] ],
     email:['',[Validators.required,Validators.email]],
     password:['', [Validators.pattern('^[0-9][a-z]*$')]]
     })
     submitForm(){
      console.log(this.forms.value.age);
      this.forms.controls['email'].setValue('')
      this.forms.controls['age'].setValue('')
      
     }
//Reactive Form
//Template Driven Form



}
