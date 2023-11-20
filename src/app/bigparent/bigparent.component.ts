import { Component, Input } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-bigparent',
  templateUrl: './bigparent.component.html',
  styleUrls: ['./bigparent.component.css']
})
export class BigparentComponent {
  array:any=[]
  constructor(public service:ContactService){}
  msgtochild=''
  @Input() receiveparent:any=''
  ngOnInit(){
    console.log(this.service.returnApi().subscribe(response=>{
      console.log(response);
      this.array=response
    }, (error)=>{
      console.log(error);
      
    }));
    
  }
}
