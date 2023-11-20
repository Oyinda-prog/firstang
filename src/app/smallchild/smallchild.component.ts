import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallchild',
  templateUrl: './smallchild.component.html',
  styleUrls: ['./smallchild.component.css']
})
export class SmallchildComponent {
  @Input() receiveparent:any=''
  msg='hello'
  oyin='beautifullywealthy'
  ruth='humility'

  condition:string='beautifullywealthy'

  switch(){
   this.condition=this.condition===this.oyin?this.ruth:this.oyin
  }
}
