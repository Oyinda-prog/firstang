import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chi',
  templateUrl: './chi.component.html',
  styleUrls: ['./chi.component.css']
})
export class ChiComponent {


  respondToPost() {
    const responseContent = 'This is your response to the post.';
    console.log(responseContent);
  }
//  @Input() receiveComment=''
 

 
// @Output()  Msgemiter=new EventEmitter()
// sendcomment=''
// sendFunction(){
// this.Msgemiter.emit(this.sendcomment)

}

