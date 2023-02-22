import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenunciaComponent } from 'src/app/denuncia/denuncia.component';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {HttpClientModule} from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DialogModule} from 'primeng/dialog';






@NgModule({
  declarations: [DenunciaComponent],
  exports:[DenunciaComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    ToastModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    DialogModule

  ],
  providers:[MessageService]
})
export class DenunciaModule { }
