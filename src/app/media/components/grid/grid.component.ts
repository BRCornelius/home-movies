import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  constructor() { }
  @Input() items: any[];
}
