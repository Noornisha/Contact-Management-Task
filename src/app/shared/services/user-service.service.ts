import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MyContact } from 'src/app/models/contact';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private serverUrl: string = `http://localhost:3000/contacts` //json-server

  constructor(private httpClient: HttpClient) { }
  //get All Contact Data
  public getAllContacts(): Observable<any> {
    let dataURL: string = `${this.serverUrl}`;
    return this.httpClient.get(dataURL).pipe(catchError(this.handleError));
  }
  public getContact(id:any): Observable<any> {
    let dataURL: string = `${this.serverUrl}/${id}`;
    return this.httpClient.get(dataURL).pipe(catchError(this.handleError));
  }
  public getContactEmail(id:any): Observable<any> {
    let dataURL: string = `${this.serverUrl}/${id}/email_addresses`;
    return this.httpClient.get(dataURL).pipe(catchError(this.handleError));
  }

  //Error Handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client Error
      errorMessage = `Errpr : ${error.error.message}`
    } else {
      //server error
      errorMessage = `Status : ${error.status} \n Massage: ${error.message}`;
    }
    return throwError(errorMessage)
  }

}
