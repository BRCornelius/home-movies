import { Injectable } from '@angular/core';
import { IFilterOptions, IVideo } from '../models';
import data from './video-library';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  constructor() { }

  activeVideo: IVideo = data[0];
  allVideos: IVideo[] = data;
  filteredVideos: IVideo[] = this.allVideos;

  filterCriteria: IFilterOptions = {
    year: [],
    location: [],
    stars: []
  }

  clickVideo: Function = video => this.activeVideo = video;
  hasDuplicate: Function = (array, value) => {
    for( let i=0; i<array.length; i++) {
      if(array[i].title === value.title && array[i].num === value.num) {
        return true;
      };
    };
    return false;
  }
  filterVideos: Function = (criteriaKey, criteriaValue): IVideo[] => this.allVideos.filter(video => video[criteriaKey] === criteriaValue)
  multiFilterVideos: Function = (): IVideo[] => {
    const allVideos = this.allVideos;
    const criteriaObject = this.filterCriteria;
    const criteriaKeys = Object.keys(this.filterCriteria);
    let results = [];
    criteriaKeys.forEach(key => {
      const selections = criteriaObject[key]
      selections.forEach(selection => {
        const goodVideos = this.filterVideos(key,selection)
        if(results.length === 0){
          results = goodVideos
        } else {
          goodVideos.forEach(video => results.push(video))
        }
      })
    })
    return results;
  }
  resetVideosList: Function = () => this.filteredVideos = this.allVideos;
  updateFilterCriteria: Function = (key, value): void => {
    const choices = this.filterCriteria[key]
    if(!choices.includes(value)) {
      choices.push(value);
    } else {
      for(let i = 0; i < choices.length; i++) {
        if(choices[i] === value) {
          choices.splice(i, 1);
        }
      }
    }
  }
  updateFilteredVideosList: Function = () => {
    this.filteredVideos = this.multiFilterVideos();
    console.log(this.filteredVideos)
  }
}
