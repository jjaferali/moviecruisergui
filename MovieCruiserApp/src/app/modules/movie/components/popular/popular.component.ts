import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../movie.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-popular',
  templateUrl: './popular.component.html',
})
export class PopularComponent implements OnInit {

  movies: Array<Movie>;

  constructor(private movieService : MovieService, private route : ActivatedRoute) {
    this.movies = [];
   }

  ngOnInit() {
    this.route.data.subscribe((data) => console.log(data));
    this.movieService.getMovies('popular')
    .subscribe((movies) => {
      this.movies.push(...movies);
    });
  }

}
