import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { Noencontrado404Component } from './noencontrado404/noencontrado404.component';
import { CompmodeladoComponent } from './compmodelado/compmodelado.component';
import { DashComponent } from './dash/dash.component';
 

export const routes: Routes = [

    { path:'/',
    component:HomeComponent
   },
    { path:'login',
    component:LoginComponent
   },
   {
    path:'register',
    component:RegisterComponent

   }, {
    path:'dash',
    component:DashComponent

   },


   {
    path:'modelado',
    component:CompmodeladoComponent

   },

   {
    path:'**',
    component:Noencontrado404Component

   },
  

];
