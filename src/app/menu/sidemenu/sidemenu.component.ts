import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';

interface SideNavToggle {
  screenWidth : number;
  collapsed: boolean
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false
  screenWidth = 0;
  idUser = localStorage.getItem("iduser");

  
  constructor( private router: Router) { }

  @HostListener('window:resize', ['$event'])

  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<= 767){
      this.collapsed = false
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  openSideMenu() : void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
  closeSideMenu() : void{
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})

  }
  navigateUSer(){
    this.router.navigate(['adduserc'])
  }



}
