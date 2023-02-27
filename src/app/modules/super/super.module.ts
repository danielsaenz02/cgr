import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperComponent } from 'src/app/super/super/super.component';



@NgModule({
  declarations: [SuperComponent],
  exports:[SuperComponent],
  imports: [
    CommonModule
  ]
})
export class SuperModule { }
