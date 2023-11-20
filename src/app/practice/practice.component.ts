import { Component } from '@angular/core';
import { PracticeService } from '../services/practice.service';
import { ArrayService } from '../services/array.service';
interface ContactInterface{
  Firstname:string,
  Lastname:string,
  Email:string,
  Phoneno:string,
  Address:string,
  }

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
constructor( public arrays:ArrayService){}
array:number[]=[];
response:any=[];
numberArray:number[]=[]
// local:ContactInterface[]=[]
contactArray:ContactInterface[]=[]
apiarray:any=[]
 ngOnInit(){
  console.log(this.arrays.getApi().subscribe(response=>{
// console.log(response);
this.apiarray=response
console.log(this.apiarray);

  }, (error)=>{
    console.log(error);
    
  }));
  
  // console.log(this.arrays.getContact());
  this.contactArray=this.arrays.getContact()


  this.numberArray=this.arrays.getArray()
  
  // console.log(this.prac.getArray());
  // this.array=this.prac.getArray()
  // console.log(this.prac.getArray());
  // console.log(this.prac.getApi());
  // this.local=this.prac.getApi()
  // console.log(this.local);
  // this.prac.getapi().subscribe(response=>{
  //   console.log(response);
  //   this.response=response
    
  // }, (error)=>{
  //   console.log(error);
    
  // })
  
   
 }
}
