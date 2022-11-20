import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.service.getToken();
    if (token !== null) {
      const authRequest = req.clone({ setHeaders: { 'Authorization': `Basic ${token}` } })
    }
    return next.handle(req)
  }
}
