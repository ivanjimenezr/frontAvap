import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
								//Con esto seteamos el Bearer + el token
            }
        });
        return next.handle(req);
  }
}
