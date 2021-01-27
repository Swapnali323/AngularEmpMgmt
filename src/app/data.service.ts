import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myData(){
    return "This is data from employee Service";
  }

  localurl:string = './assets/Employees.json';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  GetEmployee(): Observable<Employee>{
    return this.http.get<Employee>(this.localurl)
    .pipe( retry(1), catchError(this.errorHandl) )
  }


  
  errorHandl(error){
    console.log(error);
    return throwError(error);
  }
}
 