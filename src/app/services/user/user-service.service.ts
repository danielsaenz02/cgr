import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl= "http://localhost:8080/api/user"

  constructor(private http:HttpClient) { }

  save(user: User): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json')
    return this.http.post(this.baseUrl + "/create", JSON.stringify(user), {headers:headers}).pipe(
      catchError((error: HttpErrorResponse)=> {
        return throwError(error);
      }) 
    );
  }

  logIn(user: User) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json')
    return this.http.post(this.baseUrl + "/login", JSON.stringify(user), {headers:headers}).pipe(
      catchError((error: HttpErrorResponse)=> {
        return throwError(error);
      }) 
    );
  }
}
