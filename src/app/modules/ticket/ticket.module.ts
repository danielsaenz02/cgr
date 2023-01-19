import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from 'src/app/tickect/ticket.component';
import {TableModule} from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import {DataViewModule} from 'primeng/dataview';



@NgModule({
  declarations: [TicketComponent],
  exports:[TicketComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule,
    InputNumberModule,
    RadioButtonModule,
    DialogModule,
    DropdownModule,
    ToolbarModule,
    InputTextModule,
    CardModule,
    BadgeModule,
    TagModule,
    ProgressSpinnerModule,
    DataViewModule
  ],
  providers: [TicketService]
})
export class TicketModule { }
