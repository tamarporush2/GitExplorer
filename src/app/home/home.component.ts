import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SearchRepoService } from '../services/search-repo.service';
import { HttpClientModule } from '@angular/common/http';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Repository } from '../models/repository.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, MatFormFieldModule,RouterModule, 
    MatInputModule, MatButtonModule,HttpClientModule,CardComponent],
  providers: [SearchRepoService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  textSearch?:string;
  repoObs$:Observable<Repository[]>=EMPTY;
  errorMsg: any;
  constructor(private searchRepoService: SearchRepoService) { }
  onSearch() {
   this.repoObs$= this.searchRepoService.getRepoByText(this.textSearch).pipe(
    catchError(err=>{
       this.errorMsg = err.message;
        return of([]);
    })
   )
  }
}
