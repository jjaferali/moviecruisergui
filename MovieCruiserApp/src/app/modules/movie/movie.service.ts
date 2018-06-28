import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Movie } from './movie';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class MovieService {

  tmdbEndPoint: string;
  imagePrefix: string;
  apiKey: string;
  watchlistEndPoint: string;

  constructor(private http: HttpClient) { 
    this.apiKey = 'api_key=84e747d123fcfd4d8bbd2792dc5bd306';
    this.tmdbEndPoint = 'https://api.themoviedb.org/3/movie';
    this.imagePrefix = 'https://image.tmdb.org/t/p/w500';
    this.watchlistEndPoint = '';
  }

  getMovies(type: string, page: number = 1): Observable<Array<Movie>> {
    const endPoint = `${this.tmdbEndPoint}/${type}?${this.apiKey}&page=${page}`
    return this.http.get(endPoint).pipe(
      retry(3),
      map(this.pickMovieResults),
      map(this.transformPosterPath.bind(this))
    );
  }

  transformPosterPath(movies): Array<Movie>{
    return movies.map(movie =>{
      movie.poster_path = `${ this.imagePrefix}${movie.poster_path}`;
      return movie;
    });
  }
  
  pickMovieResults(response){
    return response['results'];
  }

  addMovieToWatchList(movie){
    return this.http.post(this.watchlistEndPoint, movie);
  }

  getWatchListedMovies(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(this.watchlistEndPoint);
  }
}
