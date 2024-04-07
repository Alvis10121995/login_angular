import { Component} from '@angular/core';
import {ServicioService} from '../servicio.service'
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { error } from 'console';


 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 


  correo: string= '';
  pass: string= ''



  constructor (public servicio: ServicioService, private router: Router){

  }



ngOnInit() {

    console.log(" Token="+this.servicio.getCookies())

    if(!this.servicio.getCookies()){
       console.log("sin cokies")

      }else{
      const  token=this.servicio.getCookies()
      this.servicio.validarToken(token).subscribe( 
          
        e => console.log("resultado"+e.status)



      )


      this.router.navigateByUrl('/dash')
     }


    
 
    
  
    }


    mostrarData(){
     
      console.log({'correo':this.correo,'Pass':this.pass})

    }



    login(){
     
      let user={'user':this.correo,'pass':this.pass}
      this.servicio.fetchData(user).subscribe(e => { 
               
               this.servicio.setCookies(e.token)
               this.router.navigateByUrl('dash')
     
    }  , error => console.log(error)
      
     
    )

    }
     
  

  




}
