import { Inmuebles } from './models/inmuebles';
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
  
  // Este método nos trae todos Inmuebles
  public getInmueble():Observable<Inmuebles[]>{ 
    return this.http.get<Inmuebles[]>( `${this.endpoint}/inmuebles/` );
  }

  // Get Inmueble by Id
  public getInmuebleId( id : any ) { 
    const url: string = this.endpoint + '/inmuebles/' + id;
    return this.http.get( url );
  }

  // Publicar un nuevo inmueble

  registrarInmueble(inmueble:Inmuebles): Observable <Object>{
return this.http.post(this.endpoint + '/inmuebles/',inmueble)
  }

  updateInmueble(id:string,inmueble:Inmuebles): Observable <Object>{
    return this.http.put(this.endpoint + '/inmuebles/'+id,inmueble)
      }

  //Eliminar inmueble
  eliminarInmueble(id:string){
    return this.http.delete(this.endpoint + '/inmuebles/' + id)
  }

  // enviaNewInmu(jsonNewInmu:any){
  //   let serializedForm = JSON.stringify(jsonNewInmu);
  //   console.log('se envia jsonNewInmu al back',serializedForm)

  //   return this.http.post(this.endpoint + '/inmuebles/',jsonNewInmu)
  // }
  
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

// piso piso-update
updatePiso(piso: any, id:String){
  return this.http.put(`${this.endpoint}/inmuebles/${id}`, piso)
      .pipe(
        catchError(this.handleError)
      )
}
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
