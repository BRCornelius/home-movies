import { Injectable } from '@angular/core';
import { IVideo } from '../models';
import data from './video-library';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  constructor() { }

  activeVideo: IVideo = data[0];
  allVideos: IVideo[] = data;
  filteredVideos: IVideo[];

  clickVideo: Function = video => this.activeVideo = video;
}
