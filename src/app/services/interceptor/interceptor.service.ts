import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjU4MGRlNGNhYjhhMWI3M2QxMDIzNWNjMjBkNWE4YSIsInN1YiI6IjVkOGQzNDllMTA5Y2QwMDAxOTNlZTY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p0hMRzmaKKGB8J6_39_dCZ5OeiCd6aI52rRLjMoQ82A'
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    if (this.token){
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${this.token}`
        }
      });
    }
    // @ts-ignore
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401){
          console.log('Token not found')
        }

        return throwError( err ) ;
      })
    );
  }
}
