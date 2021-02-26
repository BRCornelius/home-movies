import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { MoviesPage } from './page/movies/movies.page';
import { GridComponent } from './components/grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [DisplayComponent, MediaCardComponent, MoviesPage, GridComponent, FilterComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
  ]
})
export class MediaModule { }
