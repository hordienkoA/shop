import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class TimingInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const startTime = Date.now();

    return next.handle(request).pipe(
      tap(() => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`Request to ${request.url} took ${duration} ms`);
      })
    );
  }
}