import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  rol: Rol = {
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

  constructor(
    private userService: UserServiceService, private router: Router, private messageService: MessageService
  ) {}
 
  ngOnInit(){

  }

  userLogin(){
    this.userService.logIn(this.user).subscribe(
      (result:any) => {
        this.user= result
        this.messageService.add({severity:'success', summary:'Exitoso', detail:'Inicio de sesión exitoso'})
        
        if(this.user.rol.id== "1"){
          localStorage.setItem("iduser", this.user.id)
          this.router.navigate(['/user/'+this.user.id+'/ticket'])
          console.log(result)
        }
        if(this.user.rol.id== "2"){
          localStorage.setItem("iduser", this.user.id)
          this.router.navigate(['/user/'+this.user.id+'/panel'])
          console.log(result)
        }
        if(this.user.rol.id== "3"){
          localStorage.setItem("iduser", this.user.id)
          this.router.navigate(['/user/'+this.user.id+'/ticket'])
          console.log(result)
        }
        
    }, ( error: HttpErrorResponse) => {
      this.messageService.add({life: 4000,severity:'error', summary:'Error', detail: error.error})
    }
    )
  }

}
