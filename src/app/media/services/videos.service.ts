import { Injectable } from '@angular/core';
import { IFilterOptions, IVideo } from '../models';
import {data} from './library';
@Injectable({
  providedIn: 'root'
})

export class VideosService {

  constructor() { }

  allVideos: IVideo[] = data;
  activeVideo: IVideo = this.allVideos[0];
  filteredVideos: IVideo[] = this.allVideos;

  filterCriteria: IFilterOptions = {
    year: [],
    location: [],
    star: []
  };

  clickVideo: Function = video => {
    this.activeVideo = video;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  hasDuplicate: Function = (array, value) => {
    for ( let i = 0; i < array.length; i++) {
      if (array[i].title === value.title && array[i].num === value.num) {
        return true;
      }
    }
    return false;
  }
  filterVideos: Function = (criteriaKey, criteriaValue): IVideo[] =>
    this.allVideos.filter(video => video[criteriaKey] === criteriaValue)
  filterVideosFromArray: Function = (criteriaKey, criteriaValue): IVideo[] =>
    this.allVideos.filter(video => video[criteriaKey].includes(criteriaValue))
  multiFilterVideos: Function = (key): IVideo[] => {
    const allVideos = this.allVideos;
    const criteriaObject = this.filterCriteria;
    let results = [];
    const selections = criteriaObject[key];
    selections.forEach(selection => {
      let goodVideos;
      switch (key) {
        case 'year':
          goodVideos = this.filterVideos(key, selection);
          break;
        case 'star':
          goodVideos = this.filterVideosFromArray(key, selection);
          break;
        default:
          goodVideos = allVideos;
      }
      if (results.length === 0) {
        results = goodVideos;
      } else {
        goodVideos.forEach(video => results.push(video));
      }
    });
    return results;
  }
  resetVideosList: Function = () => this.filteredVideos = this.allVideos;
  updateFilterCriteria: Function = (key, value): void => {
    const choices = this.filterCriteria[key];
    if (!choices.includes(value)) {
      choices.push(value);
    } else {
      for (let i = 0; i < choices.length; i++) {
        if (choices[i] === value) {
          choices.splice(i, 1);
        }
      }
    }
  }
  updateFilteredVideosList: Function = (key) => this.filteredVideos = this.multiFilterVideos(key);
}
