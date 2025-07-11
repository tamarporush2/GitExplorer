import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { catchError, map, pipe, tap, throwError } from 'rxjs';

@Injectable()
export class AuthService {
  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  login(username: string, password: string) {
    return this._http.post(`${environment.apiBaseUrl}/Auth/login`, { Username: username, Password: password }).pipe(
      tap((response:any) => {
        if(!response)
          throw new Error('Response is NULL');
        this.saveToken(response.token);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error from login call:', error);
        return throwError(() => new Error('Login failed'));
      })
    );
  }
  constructor(private _http: HttpClient) { }
}
