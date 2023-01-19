import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { TicketComponent } from './tickect/ticket.component';

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
    path:'**',
    redirectTo:""
  },
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
