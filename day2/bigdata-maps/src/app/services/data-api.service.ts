import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Denues } from '../models/denues';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

 

  apiURL = 'http://localhost:10010/';
  
  constructor(
    private http: HttpClient,
  ) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  
  getDenues(idestado, idmunicipio, tipo): Observable<Denues> {
    console.log("denues: " + this.apiURL + idestado);
    return this.http.get<Denues>(this.apiURL + 'denues?entidad=' + idestado +
    '&municipio=' + idmunicipio + '&tipo=' + tipo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }   

   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
