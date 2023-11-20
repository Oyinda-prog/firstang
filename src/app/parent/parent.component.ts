import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
public firstname=''
msgfromchild='' 
receiveMsgFromChild(msg:any){
  this.msgfromchild=msg

}
}
