import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showChatbot: boolean = false;
  buttonChatbot: boolean = true;


    title = 'appCgr';
    ngOnInit(): void{
      AOS.init()
    }

  changeIcon(){
    this.buttonChatbot=!this.buttonChatbot
    this.showChatbot = !this.showChatbot
  }
    
}
