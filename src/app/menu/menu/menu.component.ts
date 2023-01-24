import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] =[];
  menu={ 'color':'#0F2A44','font-weight': 'bold',
  }
  
  ngOnInit() {
    this.items = [
        {
            label: 'Contraloria prueba',
            items: [{
                    label: 'ENTIDAD', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Organigrama y dependencias'},
                        {label: 'Símbolos institucionales'},
                    ]
                },
                {label: 'CONTRALOR GENERAL', },
                {label: 'TALENTO HUMANO', }
            ]  
        },
        {
            label: 'Control Fiscal',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'CONTROL FISCAL MACRO', icon: 'pi pi-fw pi-plus',},
                {label: 'CONTROL FISCAL MICRO PROCESO AUDITOR', icon: 'pi pi-fw pi-plus',}
            ]
        },
        {
          label: 'Resultados e informes',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'INFORMES', icon: 'pi pi-fw pi-plus',},
              {label: 'PROCESO AUDITOR', icon: 'pi pi-fw pi-plus'}
          ]
      },
      {
        label: 'Atención al ciudadano',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'DATOS ABIERTOS'},
            {label: 'CARTA DE TRATO DIGNO AL CIUDADANO'}
        ]
    },
    {
      label: 'Transparencia',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {label: 'TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA', },
         
      ]
  },
  {
    label: 'Participa',
    icon: 'pi pi-fw pi-pencil',
    items: [
        {label: 'GENERALIDADES', routerLink:'reports'},
        {label: 'CONTROL SOCIAL', }
    ]
},
{ 
  label: 'Ingresa',
  icon: 'pi pi-plus',
  items:[
    {label: 'Registrate', routerLink:'adduserc', icon: 'pi pi-user-plus'},
    {label: 'Inicia Sesión', routerLink:'login',icon: 'pi pi-sign-in'}

  ]
}
    ];
    
}

}
