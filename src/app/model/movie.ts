import { IMovie } from './movie.interface';

export class Movie implements IMovie {
    public movieId: number;
    public title: string;
    public voteAverage: number;
    public voteCount: number;
    public popularity: number;
    public posterPath: string;
    public backdropPath: string;
    public adult: boolean;
    public overview: string;
    public releaseDate: string;
    public video: boolean;
    public originalLanguage: string;
    public originalTitle: string;
    public comments: string;
    public watchlistId: number;
}
