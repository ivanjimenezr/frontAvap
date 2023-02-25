import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User, IuserLogin, IcurrentUserId } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Definimos el endpoint y los headers para poder realizar la petición
  // public endpoint: string = 'http://217.160.32.229:8004'; 
  public endpoint: string = 'http://127.0.0.1:8000'; 
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser : Object = {}; //Aquí almacenaremos el login => token + ID
  public currentUserId! : IcurrentUserId

  constructor(private http: HttpClient,public router: Router) { /* Empty */}

  // Sign-up
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.endpoint}/usuario/register`, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  public signIn(iuserLogin: IuserLogin) {
    console.log('iuserLogin: ',iuserLogin)
    return this.http.post<any>(`${this.endpoint}/user/login`, iuserLogin).subscribe((res: any) => {
      console.log('res: ',res)
      if  ('error' in res) {
        console.log('No se ha encontrado el usuario')
      }else {

        localStorage.setItem('access_token', res.access_token)
        this.router.navigate(['api/inmuebles']);
      }

        
				//Seteamos el token
        // this.getUserProfile(res._id).subscribe((res) => {
          // this.currentUser = res.data.usuarios._id;
          // console.log(res.data.usuarios._id)
          // this.router.navigate(['profile/' + res.data.usuarios._id]);
          // this.currentUser = res;
          // this.currentUserId = res.data.usuarios._id
          
          // this.router.navigate(['profile/' + this.currentUserId]);
          
          
				//Volvemos al user-profile una vez ejecutada la función
        // })
      })
  }
  public idUsuario = this.currentUserId
  public getToken() {
    return localStorage.getItem('access_token');
  }

  

  // Logout
  public doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

	// Comprobar si el usuario tiene Token
  get isLoggedIn(): boolean {
  // public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null ? true : false;
  }

  // User profile
  getUserProfile(id: string): Observable<any> {
    let api = `${this.endpoint}/usuario/${id}`;
    
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
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
