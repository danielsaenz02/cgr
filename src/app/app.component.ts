import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Carousel } from './models/carousel/carousel';
import { CarouselService } from './services/carousel/carousel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] =[];
  title = 'appCgr';
  responsiveOptions: object[] =[];
  images: Carousel[]=[];

  constructor(private carouselService: CarouselService) {
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
    this.items = [
        {
            label: 'Contraloria',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Control Fiscal',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
          label: 'Resultados e informes',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label: 'Atención al ciudadano',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    },
    {
      label: 'Transparencia',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      ]
  },
  {
    label: 'Participa',
    icon: 'pi pi-fw pi-pencil',
    items: [
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
    ]
},
{
  label: 'Ingresa',
  icon: 'pi pi-sign-in',
}
    ];
    this.carouselService.getCarousel().then(images => {
			this.images = images;
		});
    
    
}

}
