import { Component } from '@angular/core';
import { VideosService } from '../../services';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent {

  constructor(public vids: VideosService) { }
  option: string;
  updateOption: Function = $event => this.option = $event.target.value;
}
