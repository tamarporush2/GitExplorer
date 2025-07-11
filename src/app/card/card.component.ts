import { Component, Input } from '@angular/core';
import { Repository } from '../models/repository.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookmarkRepoService } from '../services/bookmark-repo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card',
  imports: [MatIconModule, MatButtonModule, HttpClientModule],
  providers: [BookmarkRepoService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() repository: Repository | undefined = undefined;
  errorMsg: any;

  constructor(private bookmarkRepoService: BookmarkRepoService) { }
  bookmarkRepo() {
    this.bookmarkRepoService.addBookmark(this.repository).subscribe({
      error: err => {
        this.errorMsg = err.message;
      }
    });

  }
}
