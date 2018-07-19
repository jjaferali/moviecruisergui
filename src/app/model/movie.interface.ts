export interface IMovie {
    movieId: number;
    title: string;
    voteAverage: number;
    voteCount: number;
    popularity: number;
    posterPath: string;
    backdropPath: string;
    adult: boolean;
    overview: string;
    releaseDate: string;
    video: boolean;
    originalLanguage: string;
    originalTitle: string;
    comments: string;
    watchlistId: number;
}
