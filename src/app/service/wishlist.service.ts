import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../model/movie.interface';
import { map, catchError } from 'rxjs/operators';
import { Observable, observable, of } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class WishlistService {
    url = environment.wishlistUrl;
    constructor(private http: HttpClient) { }

    public post(movie: IMovie): Observable<any> {

        const movieObj = {
            MovieId: movie.movieId,
            MovieName: movie.title,
            VoteAverage: movie.voteAverage,
            Title: movie.title,
            Popularity: movie.popularity,
            AssociateName: movie.title,
            PosterPath: movie.posterPath,
            OriginalLanguage: movie.originalLanguage,
            OriginalTitle: movie.originalTitle,
            BackdropPath: movie.backdropPath,
            Adult: movie.adult,
            Overview: movie.overview,
            ReleaseDate: movie.releaseDate,
            VoteCount: movie.voteCount,
            Comments: movie.comments,
            Video: movie.video
        };
        const bodyData = JSON.stringify(movieObj);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

       return this.http.post(this.url, bodyData, httpOptions).pipe(
            map((response: any): any => {
                return 'Added sucessfully.';
            }),
            catchError((error: any): any => {
                if (error.status === 409) {
                   return of('Already Added.');
                }
            })
        );
    }

    public put(movie: IMovie): Observable<boolean> {
        const updatedObject = {
            Id: movie.watchlistId,
            MovieId: movie.movieId,
            Overview: movie.overview,
            PosterPath: movie.posterPath,
            ReleaseDate: movie.releaseDate,
            VoteAverage: movie.voteAverage,
            VoteCount: movie.voteCount,
            Comments: movie.comments
        };

        const bodyData = JSON.stringify(updatedObject);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.put(this.url + '/' + movie.watchlistId, bodyData, httpOptions).pipe(
            map((response: Response): any => {
                const status = response.status;
                if (status === 200) {
                    return true;
                } else if (status === 404) {
                    return 'A server error occurred.';
                } else if (status !== 200 && status !== 204) {
                    return 'An unexpected server error occurred.';
                }

                return false;
            }));
    }

    public GetWatchList(): Observable<Array<IMovie>> {
        return this.http.get(this.url).pipe(
            map((response: any) => {
                return this.mapWatchlists(response);
            }));
    }

    mapWatchlists(response: any): any {
        const movies = [];
        response.forEach(item => {
            movies.push(this.mapWatchlist(item));
        });

        return movies;
    }

    mapWatchlist(data: any): IMovie {
        const response = new Movie();
        response.movieId = data.movieId;
        response.watchlistId = data.id;
        response.comments = data.comments;
        response.overview = data.overview;
        response.popularity = data.voteCount;
        response.posterPath = data.posterPath;
        response.releaseDate = data.releaseDate;
        response.title = data.movieName;
        response.voteAverage = data.voteAverage;
        response.voteCount = data.voteCount;
        return response;
    }

    public Delete(id: number): Observable<boolean> {
        return this.http.delete(this.url + '/' + id).pipe(
            map((response: Response): any => {
                const status = response.status;
                if (status === 200) {
                    return true;
                }

                return false;
            }));
    }
}
