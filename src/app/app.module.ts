import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { MenuModule } from './modules/menu/menu.module';
import { LoginModule } from './modules/modulelogin/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketModule } from './modules/ticket/ticket.module';
import { ReportsModule } from './modules/reports/reports.module';
import { UserModule } from './modules/user/user.module';
import { BodyComponent } from './body/body.component';
import {ButtonModule} from 'primeng/button';
import { DenunciaModule } from './modules/denuncia/denuncia.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './modules/form.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MenuModule,
    LoginModule,
    BrowserAnimationsModule,
    TicketModule,
    ReportsModule,
    UserModule,
    ButtonModule,
    DenunciaModule,
    FormModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
