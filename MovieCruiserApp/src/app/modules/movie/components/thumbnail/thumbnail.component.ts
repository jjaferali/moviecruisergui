import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar } from '@angular/material/snack-bar';

import { Movie } from '../../movie';
import { MovieService } from '../../movie.service'

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input()
  movie: Movie;
  
  constructor(private movieService : MovieService, private snackBar: MatSnackBar) {
    
   }

  ngOnInit() {
    
  }

  addToWatchList(){
    this.movieService.addMovieToWatchList(this.movie).subscribe(
      (movie)=>{
          this.snackBar.open('Movie Added to Watchlist.','',{duration:1000})
      }
    );
  }

}
