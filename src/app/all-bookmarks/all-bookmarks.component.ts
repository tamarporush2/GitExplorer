import { Component } from '@angular/core';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Repository } from '../models/repository.model';
import { BookmarkRepoService } from '../services/bookmark-repo.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-all-bookmarks',
  imports: [CommonModule,CardComponent],
  providers: [BookmarkRepoService],
  templateUrl: './all-bookmarks.component.html',
  styleUrl: './all-bookmarks.component.css'
})
export class AllBookmarksComponent {
  bookMarksObs$: Observable<Repository[]> = EMPTY;
  errorMsg: any;
  constructor(private bookmarkRepoService: BookmarkRepoService) {
    this.bookMarksObs$ = this.bookmarkRepoService.getAll().pipe(
        catchError(err=>{
           this.errorMsg = err.message;
            return of([]);
        })
       )
  }


}
