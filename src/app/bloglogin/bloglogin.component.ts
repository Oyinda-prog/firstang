import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blogservice/blog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bloglogin',
  templateUrl: './bloglogin.component.html',
  styleUrls: ['./bloglogin.component.css']
})
export class BlogloginComponent {
  constructor(public formbuilder:FormBuilder, public blogservice:BlogService, public http:HttpClient){}
  public blogform=this.formbuilder.group({
    
    password:['', Validators.required],
    email:['', [Validators.required,Validators.email]],
  
  })
 
  allUsers: any[] = []; 
  user:any={}
ngOnInit(){
this.http.get<any>('http://localhost/levelfour/blogusers.php').subscribe(response=>{
  console.log(response.allUsers);
  this.allUsers=response.allUsers
  localStorage.setItem('blogusers',JSON.stringify(this.allUsers))


  
},(error=>{
  console.log(error);
  
}));

}
  submitInfo(){
    if(this.blogform.valid){
      // console.log(this.blogform.value);
     
    
      this.blogservice.sendloginblog(this.blogform.value).subscribe((data:any)=>{
        if(data.status==true){
          this.user=data.user
          console.log(this.user);
          if(this.user){
            localStorage.setItem('bloguser',JSON.stringify(this.user))
//route to dashboard
          }
        }
        
        
      },(error=>{
        console.log(error);
        
      }))
      
    }
    
  }
}
