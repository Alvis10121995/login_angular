import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {

  constructor(private servicio : ServicioService, private router: Router,private route2: ActivatedRoute){
}


ngOnInit() {


   
this.servicio.verificar()

  

  

  }

   

logot (){
   this.servicio.ClearCookies()
   this.router.navigateByUrl('/login')

}


}
