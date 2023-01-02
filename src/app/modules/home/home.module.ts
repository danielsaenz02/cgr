import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import { HomeComponent } from 'src/app/home/home/home.component';
import { CarouselService } from 'src/app/services/carousel/carousel.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';



@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    CarouselModule,
    HttpClientModule,
    CardModule,
    StyleClassModule
  ],
  providers:[CarouselService]
  
})
export class HomeModule { }
