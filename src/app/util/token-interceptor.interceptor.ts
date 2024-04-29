import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addHeaders(request);
    return next.handle(request)
  }

  private addHeaders(request: HttpRequest<any>) {

      return request.clone({
        setHeaders: {
          authorId: `1`
        }
      });

  }
}
