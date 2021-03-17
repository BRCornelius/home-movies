import { Component, Input } from '@angular/core';
import { VideosService } from '../../services';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent {

  constructor(public vids: VideosService) { }

  @Input() clickFunction: Function;

  selectAndClose: Function = (): void => {
    this.vids.updateFilteredVideosList(this.option);
    this.clickFunction();
  }

  option = 'year';
  updateOption: Function = $event => this.option = $event.target.value;
}
