import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// money:string='money'
// date=new Date()
date=new Date()
use='blue'
use1='red'
con='blue'
get(){
this.con=this.con===this.use?this.use1:this.use
}
}
