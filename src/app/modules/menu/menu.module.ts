import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from 'src/app/menu/menu/menu.component';
import {InputTextModule} from 'primeng/inputtext';
import { HomeModule } from '../home/home.module';
import { SidemenuComponent } from 'src/app/menu/sidemenu/sidemenu.component';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [MenuComponent,SidemenuComponent],
  exports:[MenuComponent,SidemenuComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    HomeModule,   
    PanelMenuModule,
  ]
})
export class MenuModule { }
