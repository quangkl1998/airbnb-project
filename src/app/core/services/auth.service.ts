import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>({});
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      this.currentUser = user;
    }
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }

  set currentUser(value: any) {
    this.currentUserSubject.next(value);
  }

  login(values: any): Observable<any> {
    return this.http.post('/api/auth/login', values);
  }
  register(values: any): Observable<any> {
    return this.http.post('/api/auth/register', {
      ...values,
    });
  }
}
