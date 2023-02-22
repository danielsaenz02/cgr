import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Complaint } from '../models/complaint';
import { FileService } from '../services/file/file.service';


@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent {

  cardRoja = { 'background': '#d13204' }
  uploadedFiles: any[] = [];
  files: File = new File([], '');
  idDenuncia: string | null = "";
  newCodeDialog: boolean = false;
  selectedFiles!: FileList;

  complaint: Complaint ={
    id: '',
    facts: '',
    dateEvents: '',
    dateEvents_des: '',
    verification_code: '',
    status: '',
    people_involved: '',
    name_othr_entity: '',
    email_user: ''
  }
 

  constructor(private messageService: MessageService, private route: ActivatedRoute, private fileService: FileService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idDenuncia = params.get('iddenuncia');
    });
    this.getComplaint()
  }

  validateFiles(event: any) {
    let files: File[] = event.files;
    let fileNameRegex = /^[0-9a-zA-Z-_]+\.(doc|docx|xls|xlsx|ppt|pptx|pdf|rtf|bmp|gif|jpeg|txt|jpg|tif|png)$/;
    let totalSize = 0;
    let valid = true;
    for (let file of files) {
      let fileName = file.name;
      totalSize += file.size;

      if (!fileNameRegex.test(fileName) || fileName.length > 100) {
        valid = false;
        this.messageService.add({ severity: 'info', summary: "El nombre del archivo " + fileName + " no es válido o es demasiado largo, cambia el nombre a uno menor a 100 caracteres", detail: '',life: 7000 });
        break;
      }

      if (totalSize > 50 * 1024 * 1024) {
        valid = false;
        this.messageService.add({ severity: 'info', summary: "El tamaño total de los archivos supera los 50 MB", detail: '',life: 7000 });
        break;
      }
    }
    return valid;

  }
  openNew() {
    this.newCodeDialog = true;
  }

  onUpload(event: any) {
    let valid = this.validateFiles(event);
    if(valid){
      let files: FileList = event.files;
    for (let i = 0; i < files.length; i++) {
      console.log(i)
      this.fileService.uploadFile(files[i], this.idDenuncia).subscribe(data => {
      },
      (error) => {
      });
    }
    this.messageService.add({ severity: 'success', summary: 'Archivos cargados correctamente', detail: '', life: 7000 });
    this.updateComplaintById()
        setTimeout(() => {
        this.openNew();
        },3000);

    }else{
      this.messageService.add({ severity: 'error', summary: 'Revisa tus archivos', detail: '', life: 7000 });
    }
    
  }
  getComplaint(){
    this.fileService.getComplaint(this.idDenuncia).subscribe(
      (result : any) =>{
        this.complaint = result;

      }
    )
  }
  updateComplaintById(){
    this.fileService.updateComplaintstatus(this.idDenuncia).subscribe(
      (result : any) =>{

      }
     )

  }




}
