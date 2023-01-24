import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCiudadanoComponent } from 'src/app/user/user-ciudadano/user-ciudadano.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { UserEmpleadoComponent } from 'src/app/user/user-empleado/user-empleado.component';
import {SidebarModule} from 'primeng/sidebar';
import { MenuModule } from '../menu/menu.module';
import { BodyComponent } from 'src/app/body/body.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [UserCiudadanoComponent, UserEmpleadoComponent,BodyComponent ],
  exports:[UserCiudadanoComponent, UserEmpleadoComponent,BodyComponent],
  imports: [
    CommonModule,
    CardModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    SidebarModule,
    MenuModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers:[UserServiceService]
})
export class UserModule { }
