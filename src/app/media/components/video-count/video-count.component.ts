import { Component } from '@angular/core';
import { VideosService } from '../../services';

@Component({
  selector: 'video-count',
  templateUrl: './video-count.component.html',
  styleUrls: ['./video-count.component.css']
})
export class VideoCountComponent {

  constructor(public vids: VideosService) { }

}
