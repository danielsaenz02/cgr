import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from 'src/app/menu/menu/menu.component';
import {InputTextModule} from 'primeng/inputtext';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [MenuComponent],
  exports:[MenuComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    HomeModule
  ]
})
export class MenuModule { }
