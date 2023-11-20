import { Component } from '@angular/core';
import { ArrayService } from '../services/array.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  constructor(public getarray:ArrayService){}

public firstname=''
public lastname=''
public email=''
public password=''
ngOnInit(){
console.log(this.getarray.getnumberarray());

}
 
}
