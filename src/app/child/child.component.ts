import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() emitMessage=new EventEmitter()
  @Input() receiveFromParent=''
  messageToParent=''
 msgfromchild=''
  sendMsgToparent(){
    this.emitMessage.emit(this.messageToParent)
  }
  public msg='hello'
}
