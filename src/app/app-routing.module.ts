import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesPage } from './media';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'media' },
  { path: 'media', component: MoviesPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
