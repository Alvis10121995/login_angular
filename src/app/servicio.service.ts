import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {data} from '../app/intefaces/interfaces'
import { CookieService } from "ngx-cookie-service";



@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient , private cookie:CookieService) {}

  fetchData(user: any):Observable<any> {
     
    return this.http.post('https://reqres.in/api/login',user);
  }

  createUser(user:any):Observable<any>{

  
    // creación de usuario local
   return this.http.post('192.168.0.3:3000/registar',user)

  }

  setCookies ( token: string){
   this.cookie.set("token",token)

  }


  
  getCookies (){
    
    return this.cookie.get("token")
 
   }

   ClearCookies (){
    
    return this.cookie.delete("token")
    
 
   }
 




}
