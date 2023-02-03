import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  endpoint: string = 'https://auv7fn.deta.dev';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient, public router: Router) { }

//   getInmueble(): Observable<any> {
//     let api = `${this.endpoint}/inmuebles/`;
//     return this.http.get(api, { headers: this.headers }).pipe(
//       map((res: any) => {
//         return res || {}
//       }),
//       catchError(this.handleError)
//     )
//   }
  
  // Get Inmuebles
  public getInmueble() { 
    const url: string = this.endpoint + '/inmuebles/';
    return this.http.get( url );
  }

  // Get Inmueble by Id
  public getInmuebleId( id : any ) { 
    const url: string = this.endpoint + '/inmuebles/' + id;
    return this.http.get( url );
  }

  enviaNewInmu(jsonNewInmu:any){
    let serializedForm = JSON.stringify(jsonNewInmu);
    console.log('se envia jsonNewInmu al back',serializedForm)

    return this.http.post(this.endpoint + '/inmuebles/',jsonNewInmu)
  }
  
//   getInmuebleId(idPiso:any): Observable<any> {
//     let api = `${this.endpoint}/inmueble/${idPiso}`;
//     return this.http.get(api, { headers: this.headers }).pipe(
//       map((res: any) => {
//         return res || {}
//       }),
//       catchError(this.handleError)
//     )
//   }
  
  
  // Nuevo Inmueble
  // public newInmueble( jsonInmo:any ) {
  //   const url: string = this.endpoint + '/inmueble/';
  //   return this.http.post( url, jsonInmo );
  // }
  
  // Delete Inmueble
  // public deleteInmo( id: any ) {
  //   const url: string = this.endpoint + '/inmueble/' + id;
  //   return this.http.delete( url, { body: jsonFormat} );

	// }


  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
