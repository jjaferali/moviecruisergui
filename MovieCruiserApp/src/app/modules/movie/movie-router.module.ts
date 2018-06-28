import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const movieRoutes: Routes = [
    //{
        //path: 'movies',
        //
            {
                path: '',
                redirectTo: 'movies/popular',
                data: {
                    movieType: 'popular'
                },
                pathMatch: 'full'
            },
            {
                path: 'movies/popular',
                component: TmdbContainerComponent,
                data: {
                    movieType: 'popular'
                },
                pathMatch: 'full'
            },
            {
                path: 'movies/top_rated',
                component: TmdbContainerComponent,
                data: {
                    movieType: 'top_rated'
                },
                pathMatch: 'full'
            },{
                path:'movies/watchlist',
                component: WatchlistComponent,
                data: {
                    movieType: 'watchlist'
                },
                pathMatch: 'full'
            }
        //]
    //}
];

@NgModule({
    imports:[
        RouterModule.forRoot(movieRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class MovieRouterModule{

}