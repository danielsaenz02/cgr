import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {CardModule} from 'primeng/card';
import { UserServiceService } from 'src/app/services/form-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from '../form/form.component';

@NgModule({
    declarations: [
        FormComponent
    ],
    exports:[FormComponent],
    imports: [
        BrowserModule,
        CommonModule,
        ButtonModule,
        InputTextModule,
        InputNumberModule,
        RadioButtonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        CardModule,
        HttpClientModule, 
    ],
    providers:[MessageService, UserServiceService],
    bootstrap: [FormComponent]
  })
  export class FormModule { }