import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl = "http://localhost:8080/api/ticket"

  constructor(private http:HttpClient) { }

  save(user: Ticket): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json')
    return this.http.post(this.baseUrl + "/save", JSON.stringify(user), {headers:headers}).pipe(
      catchError((error: HttpErrorResponse)=> {
        return throwError(error);
      }) 
    );
  }

  getTicketByUser(idUser : string | null){
    return this.http.get<Ticket>(this.baseUrl + "/listaruser/" + idUser)
  }
}
