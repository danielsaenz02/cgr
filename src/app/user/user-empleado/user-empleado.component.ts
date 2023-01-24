import { Component, Input } from '@angular/core';

interface SideNavToggle {
  screenWidth : number;
  collapsed: boolean
}

@Component({
  selector: 'app-user-empleado',
  templateUrl: './user-empleado.component.html',
  styleUrls: ['./user-empleado.component.css']
})
export class UserEmpleadoComponent {

  isSideNavCollapsed = false
  screenWidth = 0;

  @Input() collapsed2 =false
  @Input() screenWidth2 =0;

  onToggleSideNav(data: SideNavToggle) : void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string{
    let styleClass =''
    if(this.collapsed2 && this.screenWidth2 > 768){
      styleClass = 'body-trimmed';
    }else if(this.collapsed2 && this.screenWidth2 <= 768 && this.screenWidth > 0){
      styleClass = 'body-md.screen'
    }
    return styleClass
  }

  

  
}
