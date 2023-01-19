import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Rol } from '../models/rol';
import { Ticket } from '../models/ticket';
import { User } from '../models/user';
import { TicketService } from '../services/ticket/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TicketComponent {
  @ViewChild('input')
  input!: ElementRef;

  productDialog: boolean = false;

  rol: Rol ={
    id: "",
    description: ""
  }
  user: User = {
    id: "",
    name: "",
    password: "",
    email: "",
    createdAt: "",
    status: "",
    Rol: this.rol
  } 
  ticket: Ticket = {
    id: "",
    title: "",
    description: "",
    createdAt: "",
    status: "",
    user: this.user
  }
  ticketsList : Ticket[] = [] 
  idUser : string |null= "";

  sortOrder: number =0;
  sortField: string ="";
  
  constructor(
    private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService, private ticketService:TicketService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(){
    this.setIdUser()
    this.getTicketByIdUser()
    this.primengConfig.ripple = true;
  }
  openNew() {
    this.productDialog = true;
}
  getTicketByIdUser(){
    this.ticketService.getTicketByUser(this.idUser).subscribe(
      (result : any) =>{
        this.ticketsList = result;
        console.log(this.ticketsList)
      }
    )
  }
  setIdUser(){
    this.idUser = localStorage.getItem("iduser")
  }
  onSortChange(event: { value: any; } ) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

  
  

}
