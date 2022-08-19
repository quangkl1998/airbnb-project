import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}
  getLocation(): Observable<any> {
    return this.http.get<any>('api/locations').pipe(
      map((data) => {
        return data;
      })
    );
  }
}
