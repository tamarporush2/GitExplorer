import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../models/repository.model';
import { environment } from '../environment/environment';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class BookmarkRepoService {

  constructor(private _http:HttpClient) { }
  addBookmark(repo?:Repository){
   return this._http.post(`${environment.apiBaseUrl}/Bookmark/bookmarkRepo`,repo,{
    withCredentials: true
  }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error from AddbookmarkRepo call:', error);
        return throwError(() => new Error('An error occurred while add repository to bookmarks. Please try again.'));
      })
    );
  }
  getAll(){
   return this._http.get<Repository[]>(`${environment.apiBaseUrl}/Bookmark`,{
    withCredentials: true
  }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error from getAllBookmarks call:', error);
        return throwError(() => new Error('An error occurred while get bookmarks. Please try again.'));
      })
    );
  
  }
}
