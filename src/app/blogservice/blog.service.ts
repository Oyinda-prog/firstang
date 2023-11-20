import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
//  public headers:any = new HttpHeaders({
//     'Content-Type': 'application/json'
//   });
  constructor(public http:HttpClient) { }
 
  sendblog(blogusers:any){
  return this.http.post('http://localhost/levelfour/blogsignup.php',blogusers)
  }
  sendloginblog(bloglogin:any){
    return this.http.post('http://localhost/levelfour/blogsignin.php',bloglogin)
  }
  getbloguser(){
    return JSON.parse(localStorage['bloguser'])
  }
}
