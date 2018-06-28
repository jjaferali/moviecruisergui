import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MovieModule } from './modules/movie/movie.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './modules/movie/components/container/container.component';
import { TmdbContainerComponent } from './modules/movie/components/tmdb-container/tmdb-container.component';
import { WatchlistComponent } from './modules/movie/components/watchlist/watchlist.component';
import { MovieRouterModule } from './modules/movie/movie-router.module';

// const approute: Routes = [
//   {
//     path: '',
//     redirectTo: '/movies',
//     pathMatch: 'full',
//     // component: ContainerComponent
//   },
//   {
//     path: '',
//     redirectTo: 'movies/popular',
//     pathMatch: 'full'
//   },
  
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MovieModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    // RouterModule.forRoot(approute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
