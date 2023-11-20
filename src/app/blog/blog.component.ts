import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blogservice/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(public formbuilder:FormBuilder, public blogservice:BlogService){}
public blogform=this.formbuilder.group({
  full_name:['', Validators.required],
  password:['', Validators.required],
  email:['', [Validators.required,Validators.email]],
  user_name:['', Validators.required],
})
submitInfo(){
  if(this.blogform.valid){
    // console.log(this.blogform.value);
    
    this.blogservice.sendblog(this.blogform.value).subscribe(data=>{
      console.log(data);
      
    },(error=>{
      console.log(error);
      
    }))
    
  }
  
}
}
