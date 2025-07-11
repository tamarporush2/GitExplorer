import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Repository } from '../models/repository.model';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class SearchRepoService {
  getRepoByText(query?: string) {
    return this._http.get<Repository[]>(`${environment.apiBaseUrl}/SearchRepo/${query}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error from SearchRepo call:', error);
        return throwError(() => new Error('An error occurred while fetching the repositories. Please try again.'));
      })
    );
  }

  constructor(private _http: HttpClient) { }
}
