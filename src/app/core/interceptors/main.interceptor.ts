import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  baseURL = 'http://airbnb.cybersoft.edu.vn';

  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // thay đổi request trước khi gửi lên server
    const options = {
      url: `${this.baseURL}/${request.url}`,
      headers: request.headers.append(
        'tokenByClass',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0'
      ),
    };
    options.headers = options.headers.append(
      'Access-Control-Allow-Origin',
      '*'
    );
    options.headers = options.headers.append(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    options.headers = options.headers.append(
      'Access-Control-Allow-Headers',
      '*'
    );

    const { accessToken } = this.authService.currentUser;
    if (accessToken) {
      options.headers = options.headers.append(
        'Authorization',
        `Bearer ${accessToken}`
      );
    }

    request = request.clone(options);

    return next.handle(request);
  }
}
