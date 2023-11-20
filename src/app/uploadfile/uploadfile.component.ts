import { Component } from '@angular/core';
import { NewapiService } from '../services/newapi.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  constructor(public http:NewapiService){}
  selectedFile:File|any;

  onFileSelected(event:any){
this.selectedFile=event.target.files;
// console.log(this.selectedFile);

  }
  uploadFile(){
   if(this.selectedFile){
    // console.log(this.selectedFile[0])
    this.http.upload(this.selectedFile).subscribe(response=>{
      console.log(response);
      
    },(error)=>{
console.log(error);

    });
    
   };
    
  }
}
