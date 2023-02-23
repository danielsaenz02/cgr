import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Form } from 'src/app/models/form';
import { Usuarios } from 'src/app/models/Usuarios';
import { UserServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  user: Usuarios = {
    id: '',
    name: undefined,
    correo: undefined,
    identificactionNumber: undefined,
    typeRequest: '',
    filedNumber: ''
  }
  form: Form = {
    id: '',
    identificaction_number: undefined,
    status: undefined,
    question_one: undefined,
    question_two: undefined,
    question_three: undefined
  }
  flagtest : boolean = true;
  flagspan : boolean = false;
  flagspanG : boolean = false;

  ShowinfoDB : boolean = false;
  ShowConsult : boolean = true;
  ShowForm : boolean = true;
  flagsend : boolean = false;
  Showthanks1 : boolean = false;
  Showthanks2 : boolean = false;
  changebttn1 : boolean = true;
  changebttn2 : boolean = false;

    formtest = this.fb.group({
    cedula: ['', [Validators.required, 
      Validators.minLength(5), 
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]
     ]
  })
    formtestG = this.fb.group({
      Recibida: ['', Validators.required],
      Acorde: ['', Validators.required],
      Agendar: ['', Validators.required]
    })

  constructor(private messageService: MessageService, private userService: UserServiceService, private fb: FormBuilder){}

  onSubmit():void{
    if(this.formtest.value.cedula==null){
    }
    else{
      this.userService.FindbyIdentificationNumber(this.formtest.value.cedula).subscribe((result : any) =>
    {
      this.user = result;
      console.log(this.user) 
      this.ShowinfoDB = true;
      this.ShowConsult = false;
      this.flagsend = true;
    },

      (error:HttpErrorResponse) => 
    {
      this.messageService.add({life: 3000,severity:'error', summary:'Error', detail: error.error})
    }); 
  }
  }
  showspan(){
    this.flagspan = true;
  }
  showspanG(){
    this.flagspanG = true;
  }
  onSubmitG(){
    if(this.formtestG.value.Agendar == 'Si' && this.flagsend == true && this.formtestG.value.Recibida != '' && this.formtestG.value.Acorde != ''){
      this.ShowinfoDB = false;
      this.ShowForm = false;
      this.Showthanks2 = true;
    }
    else if(this.formtestG.value.Agendar == 'No' && this.flagsend == true && this.formtestG.value.Recibida != '' && this.formtestG.value.Acorde != ''){
      this.ShowinfoDB = false;
      this.ShowForm = false;
      this.Showthanks1 = true;
    }
  }
  changebuttonE(){
    this.changebttn1 = false;
    this.changebttn2 = true;
  }
  changebuttonA(){
    this.changebttn1 = true;
    this.changebttn2 = false;
  }
  saveform(){ 
      this.form.question_one = this.formtestG.value.Recibida;
      this.form.question_two = this.formtestG.value.Acorde;
      this.form.question_three = this.formtestG.value.Agendar;
      this.form.identificaction_number = this.formtest.value.cedula;
      this.form.status = 's';
      this.userService.saveform(this.form).subscribe((result:any) => 
      {this.form= result 
      this.messageService.add({severity:'success', summary:'Realizado', detail:'Solicitud Enviada'})
      console.log(result)}, 
      ( error: HttpErrorResponse) => 
      { 
      this.messageService.add({life: 4000,severity:'error', summary:'Error', detail: error.error})} )
  }
}