import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Form } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl= "https://cgrappcontrolcgr.azurewebsites.net/api/user"

  constructor(private http:HttpClient) { }

  FindbyIdentificationNumber(identificationNumber:string | null){
    return this.http.get(this.baseUrl + "/userIdentification/" + identificationNumber).pipe(catchError((error: HttpErrorResponse)=> { return throwError(error);}));
  }

  saveform(form:Form ): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json')
    return this.http.post(this.baseUrl + "/form/create", JSON.stringify(form),
    {headers:headers}).pipe(catchError((error: HttpErrorResponse)=> 
    {return throwError(error);}));
  }
}