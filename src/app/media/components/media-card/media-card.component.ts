import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent {

  constructor() { }

  @Input() title: string;
  @Input() thumbnailUrl: string;
}
