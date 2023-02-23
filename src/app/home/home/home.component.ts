import { Component } from '@angular/core';
import { Carousel } from 'src/app/models/carousel/carousel';
import { CarouselService } from 'src/app/services/carousel/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  responsiveOptions: object[] = [];
  images: Carousel[] = [];
  cardRoja={'background':'#d13204', 'color':'#FFF','font-family':'Helvetica','font-size':'0.875rem','min-height': '1px',
  'padding-bottom': '1rem',
  'padding-left': '1rem',
  'padding-right': '1rem',
  'padding-top': '1rem',}
  cardAmarilla={'background':'#FFC700', 'color':'#272833','font-family':'Helvetica !IMPORTANT','font-size':'0.875rem','min-height': '1px',
  'padding-bottom': '1rem',
  'padding-left': '1rem',
  'padding-right': '1rem',
  'padding-top': '1rem',}
  cardAzul={'background':'#2e5aac', 'color':'#fff','font-family':'Helvetica','font-size':'0.875rem','min-height': '1px',
  'padding-bottom': '1rem',
  'padding-left': '1rem',
  'padding-right': '1rem',
  'padding-top': '1rem',}
  cardBlanca={'background':'#fff', 'color':'#0F2A44','font-family':'Helvetica','font-size':'0.875rem','min-height': '1px',
  'padding-bottom': '1rem',
  'padding-left': '1rem',
  'padding-right': '1rem',
  'padding-top': '1rem',}
  showChatbot: boolean = false;
  buttonChatbot: boolean = true;


  

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  ngOnInit() {
    this.images = [{imagen:"./assets/images/prueba.jpeg"},
                  {imagen:"./assets/images/PlanAnticorrupcion_web_banner.jpg"},
                  {imagen:"./assets/images/planaccion.jpg"},]
  }
  changeIcon(){
    this.buttonChatbot=!this.buttonChatbot
    this.showChatbot = !this.showChatbot
  }

}
