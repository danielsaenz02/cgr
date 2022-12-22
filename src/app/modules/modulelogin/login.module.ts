import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/login/login/login.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [LoginComponent],
  exports:[LoginComponent],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class LoginModule { }
