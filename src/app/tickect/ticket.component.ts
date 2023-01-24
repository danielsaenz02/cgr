import { HttpErrorResponse } from '@angular/common/http';
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

  newTicketDialog: boolean = false;

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
    rol: this.rol
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
  disabled: boolean = true;

  
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
    this.newTicketDialog = true;
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

  saveTicket(){
    this.ticket.status="n"
    this.user.id = "3"
    this.ticketService.save(this.ticket).subscribe(
      (result:any) => {
        this.ticket= result
        this.messageService.add({severity:'success', summary:'Exitoso', detail:'Solicitud Enviada'})
        //localStorage.setItem("iduser", this.user.id)
        //this.router.navigate(['/user/'+this.user.id+'/ticket'])
        console.log(result)
    }, ( error: HttpErrorResponse) => {
      this.messageService.add({life: 4000,severity:'error', summary:'Error', detail: error.error})
    }
    )
  }

  closeDialog(){
    this.newTicketDialog = false;
  }

  
  

}
