import { Vendedores } from './models/vendedores';
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

  // endpoint: string = 'https://auv7fn.deta.dev';
  endpoint: string = 'http://127.0.0.1:8000';
  // endpoint: string = 'http://217.160.32.229:8004';
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

  // Actualizar inmueble
  updateInmueble(id:string,inmueble:any): Observable <Object>{
    return this.http.put(this.endpoint + '/inmuebles/'+id,inmueble)
      }

  // Finalizar un inmueble
  finalizarInmueble(id:string,inmueble:any): Observable <Object>{
    return this.http.patch(this.endpoint + '/inmuebles/'+id,inmueble)
      }

  //Eliminar inmueble
  eliminarInmueble(id:string){
    return this.http.delete(this.endpoint + '/inmuebles/' + id)
  }

  // VENDEDORES

  // Este método nos trae todos Vendedores
  public getVendedores():Observable<Vendedores[]>{
    console.log('dddddd')
    return this.http.get<Vendedores[]>( `${this.endpoint}/vendedores/` );
  }

  // Get Vendedor by Id
  public getVendedorId( id : any ) { 
    const url: string = this.endpoint + '/vendedores/' + id;
    return this.http.get( url );
  }

  // Publicar un nuevo vendedor
  registrarVendedor(vendedor:Vendedores): Observable <Object>{
    return this.http.post(this.endpoint + '/vendedores',vendedor)
  }

  // Actualizar vendedor
  updateVendedor(id:string,vendedor:any): Observable <Object>{
    return this.http.put(this.endpoint + '/vendedores/'+id,vendedor)
      }

  // Finalizar un vendedor
  finalizarVendedor(id:string,vendedor:any): Observable <Object>{
    return this.http.patch(this.endpoint + '/vendedores/'+id,vendedor)
      }
  
  //Eliminar vendedor
  eliminarVendedor(id:string){
    return this.http.delete(this.endpoint + '/vendedores/' + id)
  }
  
  // ASOCIACIONES

    // Asociar vendedores a inmueble
    asociarVendedor(id:string,asociacion:any): Observable <Object>{
      return this.http.post(this.endpoint + '/asociaVendedor/'+id,asociacion)
    }
  
  // Get Vendedor by inmueble
  public getVendedorInmueble( id : any ) { 
    const url: string = this.endpoint + '/asociaVendedor/' + id;
    return this.http.get( url );
  }
  
  
  
  
  // Contratos
  public contratoArras( id : any ) { 
    const url: string = this.endpoint + '/inmuebles/arras/' + id;
    return this.http.get( url );
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
