import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { MenuModule } from './modules/menu/menu.module';
import { LoginModule } from './modules/modulelogin/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TicketModule } from './modules/ticket/ticket.module';
import { ReportsComponent } from './reports/reports/reports.component';
import { ReportsModule } from './modules/reports/reports.module';




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
    ReportsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
