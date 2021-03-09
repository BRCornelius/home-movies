import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor() { }
  open = false;
  buttonText: string = this.open ? 'Close' : 'Filter';
  clickFunction: Function = (): void => {
    this.open = !this.open;
    this.buttonText = this.open ? 'Close' : 'Filter';
  }
}
