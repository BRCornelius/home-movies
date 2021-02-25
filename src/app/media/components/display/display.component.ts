import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor() { }

  @Input() activeVideoUrl: string;
}
