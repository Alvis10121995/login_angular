import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {data} from '../app/intefaces/interfaces'
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient , private cookie:CookieService,private router: Router) {}

  fetchData(user: any):Observable<any> {
     
    return this.http.post('https://apiauthentication-xi.vercel.app/login',user);
  }

  createUser(user:any):Observable<any>{

  
    // creación de usuario local
   return this.http.post('https://apiauthentication-xi.vercel.app/data',user)

  }

  setCookies ( token: string){
   this.cookie.set("token",token)

  }



  validarToken(token:string):Observable<any>{


  
    const headers = new HttpHeaders({
      'Authorization': token, // Encabezado de autorización con un token JWT
      'Content-Type': 'application/json' // Tipo de contenido
      // Otros encabezados según sea necesario
    });

    const options = { headers: headers };


   return this.http.get('https://apiauthentication-xi.vercel.app/verifytoken',options)

  }

  
  getCookies (){
    
    return this.cookie.get("token")
 
   }

   ClearCookies (){
    
    return this.cookie.delete("token")
    
 
   }
 


   verificar(){


    if(!this.getCookies()){
      console.log("sin cokies")

     }else{
     const  token=this.getCookies()
     this.validarToken(token).subscribe( 
         
       (e) => {
           if(e.status=='200'){
             console.log("Token Valido")
             this.router.navigateByUrl('/dash')
           }else{
             console.log("Token inValido")

           }

       }
       
       



     )


     
    }




   }





}
