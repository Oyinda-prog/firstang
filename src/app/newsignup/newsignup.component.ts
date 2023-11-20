import { Component,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatBottomSheet,

  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-newsignup',
  templateUrl: './newsignup.component.html',
  styleUrls: ['./newsignup.component.css']
})
export class NewsignupComponent {
  constructor(public formbuilder:FormBuilder, private _bottomSheet: MatBottomSheet,public snack:MatSnackBar){
    this.filteredOptions = this.options3.slice();
  }
  // private _bottomSheetRef: MatBottomSheetRef<NewsignupComponent>
  // options = ['Option 1', 'Option 2', 'Option 3'];
  // options1 = ['Option 3', 'Option 4', 'Option 5']; 
  //  options2 = ['Option 6', 'Option 7', 'Option 8'];
  options3 = ['Mary', 'Seun', 'Doyin'];
  
  public firstname=''
  myControl = new FormControl();
  public forms=this.formbuilder.group({
    first_name:['',Validators.required],
    email:['',[Validators.required,Validators.maxLength(10)]],
    password:['', Validators.required]
  })
  
  send(){ 
    console.log(this.forms.value.first_name);
    this.forms.controls['first_name'].setValue('')
    
  }
  filteredOptions: string[];
  
  // constructor() {
    //   this.filteredOptions = this.options.slice();
    // }
    
    filter(): void {
      const filterValue = this.firstname.toLowerCase();
      this.filteredOptions = this.options3.filter(o => o.toLowerCase().includes(filterValue));
    }
    hidden = false;
    standalone=true
    
    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }
    
    
    openBottomSheet(): void {
      this._bottomSheet.open(NewsignupComponent);
    }
    public allform:any={}
    firstFormGroup = this.formbuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this.formbuilder.group({
      secondCtrl: ['', Validators.required],
    });
    isLinear = false;
  ngOnInit(){
   this.snackbar()
   console.log( this.firstFormGroup.value.firstCtrl);
   this.allform={...this.firstFormGroup.value,...this.secondFormGroup.value}
   console.log(this.allform);
    
  }
  checks(){
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      this.allform = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
      console.log('All Form Values:', this.allform);
    }
  }

  // let obj1 = {firstname:"sola",lastname:"sade"}
  // let obj2 = {address:"40b,adenugba street"}
  // let obj3 = {gender:"male",accNo:"0231185703"}
  
  // let combined = {...obj1,...obj2,...obj3}
  // console.log(combined)
public first_name='Oyindamola'
  snackbar(){
  // this.snack.open('You are welcome','',{
  //   duration:2000
  // })
  this.snack.openFromComponent(SnackbarComponent,{
    data:{message:this.first_name},
     duration:5000
  })

  }
  showFiller = false;


  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  @ViewChild('sidenav') sidenav!: MatSidenav;
  ngAfterViewInit() {
    console.log('Sidenav reference:', this.sidenav);
  }
}

