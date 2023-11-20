import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition ,MatSnackBarConfig, MatSnackBarHorizontalPosition} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { FormBuilder, Validators } from '@angular/forms';
interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent {
  constructor(public snack:MatSnackBar){}
  public name= 'Oyindamola'
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
 
ngOnInit(){
 this.getsnack()
}
 con: MatSnackBarConfig = {
  duration: 5000,
  horizontalPosition: 'bottom' as MatSnackBarHorizontalPosition // Set the vertical position to top
};
    getsnack(){
      this.snack.open( `welcome, ${this.name}`,'',this.con)
    } 
     
}
