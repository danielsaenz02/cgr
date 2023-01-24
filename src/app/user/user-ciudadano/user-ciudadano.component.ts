import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import { Rol } from 'src/app/models/rol';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user/user-service.service';


@Component({
  selector: 'app-user-ciudadano',
  templateUrl: './user-ciudadano.component.html',
  styleUrls: ['./user-ciudadano.component.css'],
  providers: [MessageService]
})
export class UserCiudadanoComponent {

  rolUser: Rol ={
    id: "3",
    description: ""
  }
  user: User = {
    id: '',
    name: "",
    password: "",
    email: "",
    createdAt: "",
    status: "A",
    rol: this.rolUser
  }

  constructor(
    private router: Router, private messageService: MessageService, private userService: UserServiceService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  saveUser(){
    this.userService.save(this.user).subscribe(
      
      (result:any) => {
        
        this.user= result
        this.messageService.add({severity:'success', summary:'Exitoso', detail:'Registro exitoso'})
        //localStorage.setItem("iduser", this.user.id)
        //this.router.navigate(['/user/'+this.user.id+'/ticket'])
        console.log(result)
    }, ( error: HttpErrorResponse) => {
      this.messageService.add({life: 4000,severity:'error', summary:'Error', detail: error.error})
    }
    )
  }
  routerLogin(){
    this.router.navigate(['login'])
  }
  }


