import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  baseUrl= "https://cgrappcontrolcgr.azurewebsites.net/api/file"
  /*baseUrl= "http://localhost:8080/api/file"*/

  constructor(private http:HttpClient) { }

  uploadFile(file : File, idDenuncia: string | null): Observable<HttpEvent<any>>{
    let formData = new FormData();
  formData.append('files', file);

  const req = new HttpRequest('POST', this.baseUrl + '/upload/' + idDenuncia, formData, {
    reportProgress: true,
    responseType: 'json'
    
  });
  return this.http.request(req);
}

getComplaint(idComplaint:string |null){
  return this.http.get(this.baseUrl +"/complaint/" + idComplaint)
}
updateComplaintstatus(idComplaint:string |null){
  return this.http.get(this.baseUrl + "/complaintstatus/"+idComplaint)
}
}
