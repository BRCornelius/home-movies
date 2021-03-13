import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services';

@Component({
  selector: 'location-options',
  templateUrl: './location-options.component.html',
  styleUrls: ['./location-options.component.css']
})
export class LocationOptionsComponent {

  constructor(public vids: VideosService) { }

}
