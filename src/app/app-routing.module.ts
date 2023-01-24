import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ReportsComponent } from './reports/reports/reports.component';
import { TicketComponent } from './tickect/ticket.component';
import { UserCiudadanoComponent } from './user/user-ciudadano/user-ciudadano.component';
import { UserEmpleadoComponent } from './user/user-empleado/user-empleado.component';

const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    component:HomeComponent,
    
  },
  {
    path:'user/:iduser/ticket',
    component:TicketComponent,
  },
  {
    path:'user/:iduser/panel',
    component:UserEmpleadoComponent,
  },
  {
    path:'reports',
    component:ReportsComponent,
  },
  {
    path:'adduserc',
    component:UserCiudadanoComponent,
  },
  {
    path:'**',
    redirectTo:""
  },
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
