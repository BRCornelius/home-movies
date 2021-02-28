import { Component } from '@angular/core';
import { VideosService } from '../../services';

@Component({
  selector: 'name-options',
  templateUrl: './name-options.component.html',
  styleUrls: ['./name-options.component.css']
})
export class NameOptionsComponent {

  constructor(public vids: VideosService) { }

}
