import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Section} from '../Section';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
sections: Section[];
  constructor(private dd: DataService) { }

  ngOnInit() {
    this.sections = this.dd.sections;
  }
  toBook() {
    this.dd.notifyToDisplay.next(false);
  }
}
