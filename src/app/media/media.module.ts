import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { MoviesPage } from './page/movies/movies.page';

@NgModule({
  declarations: [DisplayComponent, MediaCardComponent, MoviesPage],
  imports: [
    CommonModule
  ]
})
export class MediaModule { }
