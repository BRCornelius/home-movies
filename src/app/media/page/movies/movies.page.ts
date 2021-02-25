import { Component, OnInit } from '@angular/core';
import { IVideo } from '../../models';
import { VideosService } from '../../services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.css']
})
export class MoviesPage implements OnInit {

  constructor(public vids: VideosService) { }

  ngOnInit() {}

  activeVideo: IVideo = this.vids.activeVideo;
  allVideos: IVideo[] = this.vids.allVideos;
  filteredResults: IVideo[] = this.vids.filteredVideos;
}
