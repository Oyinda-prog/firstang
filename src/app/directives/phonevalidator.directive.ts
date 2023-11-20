import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhonevalidator]',
  providers:[
    {
      provide:NG_VALIDATORS,useExisting:PhonevalidatorDirective,multi:true
    }
  ]
})
export class PhonevalidatorDirective {

  constructor() { }
  validate(control:AbstractControl):{[key:string]:any}|void{
  
    console.log(control.value);
    if(control.value){
      console.log(control.value.indexOf("+"));
      if(control.value.indexOf("+234")==-1){
      return {noCountryCode:true}
      }
    }
    
  }

}
 