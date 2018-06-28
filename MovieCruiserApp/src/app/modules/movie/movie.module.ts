import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ HttpClientModule } from '@angular/common/http';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule } from '@angular/material/snack-bar';

import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { MovieService } from './movie.service';
import { PopularComponent } from './components/popular/popular.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { ContainerComponent } from './components/container/container.component';
import { MovieRouterModule } from './movie-router.module';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRouterModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  declarations: [
    HelloWorldComponent, 
    ThumbnailComponent, 
    PopularComponent, TopRatedComponent, 
    ContainerComponent, 
    WatchlistComponent, 
    TmdbContainerComponent],
  exports:[
    MovieRouterModule,
    HelloWorldComponent,
    ThumbnailComponent,
    PopularComponent,
    TopRatedComponent,
  ],
  providers: [MovieService]
})
export class MovieModule { }
