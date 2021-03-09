import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services';

@Component({
  selector: 'year-options',
  templateUrl: './year-options.component.html',
  styleUrls: ['./year-options.component.css']
})
export class YearOptionsComponent {
  constructor(public vids: VideosService) { }
}
