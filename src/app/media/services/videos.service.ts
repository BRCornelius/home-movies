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
  hasDuplicate: Function = (array, value) => {
    for( let i=0; i<array.length; i++) {
      if(array[i].title === value.title && array[i].num === value.num) {
        return true;
      };
    };
    return false;
  }
  filterVideos: Function = (allVideos, criteriaKey, criteriaValue) => {
    let result = [];
    allVideos.reduce((agg, curr) => {
      if(!this.hasDuplicate(agg, curr) && curr[criteriaKey] === criteriaValue) {
        agg.push(curr);
      };
      return agg;
    }, result)
  }
  multiFilterVideos: Function = (allVideos, criterionArray) => {
    let results = [];
    criterionArray.forEach(criteria => {
      const key = Object.keys(criteria)[0];
      const value = criteria[key];
      const filteredResults = this.filterVideos(allVideos, key, value);
      if(results.length === 0) {
        results = filteredResults;
      } else {
        results.concat(filteredResults);
      };
    });
    return results;
  }
}
