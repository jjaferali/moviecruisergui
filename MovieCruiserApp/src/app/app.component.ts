import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
  <span>Movie Cruiser</span>
  <button mat-button routerLink="/movies/popular">Popular Movie</button>
  <button mat-button routerLink="/movies/top_rated">Toprated Movie</button>
  <button mat-button routerLink="/movies/watchlist">Watchlist</button>
  </mat-toolbar>
  <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'app';
}
