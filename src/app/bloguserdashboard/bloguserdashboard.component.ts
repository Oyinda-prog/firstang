import { Component } from '@angular/core';
import { BlogService } from '../blogservice/blog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bloguserdashboard',
  templateUrl: './bloguserdashboard.component.html',
  styleUrls: ['./bloguserdashboard.component.css']
})
export class BloguserdashboardComponent {
public user= JSON.parse(localStorage['blogusers'])
public bloguser:any={}
constructor(public blog: BlogService, public http:HttpClient){}
public content=''
id:any;
ngOnInit(){
  this.bloguser=this.blog.getbloguser()
  console.log(this.bloguser.bloguser_id);
  this.id=this.bloguser.bloguser_id
  console.log(this.id);
  
  
};

 public files:any;
fileselected(e:any){
  this.files= e.target.files[0]
    console.log(this.files);
    
}
sendpost(){
  // console.log(this.content);
  
const formData=new FormData()
formData.append('image',this.files)
formData.append("content",this.content)
formData.append('id',this.id)
// console.log(formData);
// console.log('Image', this.files);
// console.log('Content:', this.content);
// console.log('id:', this.id);

this.http.post('http://localhost/levelfour/blogpost.php',formData).subscribe(data=>{
  console.log(data);
  
},(error=>{
  console.log(error);
  
}))
}
}
