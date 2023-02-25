import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private REST_API_SERVER = "http://127.0.0.1:8000/";
  private REST_API_SERVER = "http://217.160.32.229:8004/";

  constructor(private httpClient: HttpClient) { }

  getTypeRequest(url:any) {
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url:any, payload:any) {
    console.log('Entramos en elservicio', url, payload)
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => {
      console.log('res: ',res)
      return res;
    }));
  }

  

  putTypeRequest(url:any, payload:any) {
    return this.httpClient.put(this.REST_API_SERVER+url, payload).pipe(map(res => {
      return res;
    }))
  }
}
