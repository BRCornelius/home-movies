import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    this.displayYear = this.year === 'unknown' ? '????' : `19${this.year}`
  
  }

  @Input() title: string;
  @Input() thumbnailUrl: string;
  @Input() year: string;

  displayYear: string;
}
