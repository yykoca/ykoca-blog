import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authenticationService: AuthenticationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authenticationService.isLoggedIn()) {
      const newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.getToken()}`,
        },
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
