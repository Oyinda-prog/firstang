import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewapiService {
public names:string[]=['Oyin','Daniel','Ayo','Olu','Dara']
public name:string='Hello, how are you doing?'
public school:string=''
 constructor(public http:HttpClient){}
getnames(){
return this.names
}
getname(){
  let house=56
  return house
} 
getapi(){
 return this.http.get('https://api.github.com/users')
}
 public signup(userObj:any){
  return this.http.post('http://localhost/levelfour/newsignup.php',userObj);
}
public upload(img:File|any){
  const formData= new FormData();

  for (let index = 0; index < img.length; index++) {
    formData.append('image[]',img[index])
  }
 
  return this.http.post('http://localhost/levelfour/uploadfile.php',formData)
}
  //axios.get('https://hhjjkkkkk') 
}
