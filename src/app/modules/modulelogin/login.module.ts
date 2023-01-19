import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/login/login/login.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';





@NgModule({
  declarations: [LoginComponent],
  exports:[LoginComponent],
  imports: [
    CommonModule,
    CardModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    ToastModule

  ],
  providers:[UserServiceService]
})
export class LoginModule { }
