import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, mergeMap, of, tap } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private dataService: DataService) {}

  // intercept(
  //   request: HttpRequest<unknown>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<unknown>> {
  //   console.log('Interceptor Called');
  //   return next.handle(request).pipe(
  //     tap((event: any) => {
  //       if (event instanceof HttpResponse) {
  //         if (event.status !== 200) {
  //           console.log('Response', event.status);
  //         }
  //         return of(null);
  //       } else {
  //         console.log('Inside Interceptor :: token :', localStorage.getItem('user-token'));

  //         request = request.clone({
  //           setHeaders: {
  //             Authorization: `Bearer ${localStorage.getItem('user-token')}`,
  //           },
  //         });
  //         return next.handle(request);
  //       }
  //     })
  //   );
  // }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let idToken = localStorage.getItem('user-token');
    // idToken = '123454546';
    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken),
        // headers: req.headers.set('Authorization', 'Bearer ' + idToken),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }

  getToken() {
    // return from(
    //     new Promise((resolve, reject) => {
    //         Auth.currentSession().then((session) => {
    //             if (!session.isValid()) {
    //                 resolve(null);
    //             } else {
    //                 resolve(session.getIdToken().getJwtToken());
    //             }
    //         }).catch(err => { return resolve(null) });
    //     })
    // );
    return of(localStorage.getItem('user'));
    // return this.dataService.userInfo;
  }
}
