import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { subscribe } from 'diagnostics_channel';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usuario:string = ''
  Password:string = ''
  Password2:string = ''
  messagepass:string=''

  

constructor (public servicio:ServicioService) {}



   comparar(){
    
    console.log("Compara")
     if(this.Password !== this.Password2){
      this.messagepass='Contraseñas no coinciden'   
   }else{
    this.messagepass='' 
      this.servicio.createUser({"user":this.usuario,"pass":this.Password}).subscribe( e => console.log(e) )
   }
    

   }



  createUser():void{
     
    this.comparar()
   // this.servicio.createUser(  {'name':this.usuario,'job':this.Password} ).subscribe( respon => console.log(respon))
   
  }



}
