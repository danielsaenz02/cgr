import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from 'src/app/menu/menu/menu.component';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [MenuComponent],
  exports:[MenuComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule
  ]
})
export class MenuModule { }
