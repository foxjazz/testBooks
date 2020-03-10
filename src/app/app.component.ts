import { Component, OnInit, OnDestroy } from '@angular/core';
import {Data} from '@angular/router';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  toDisplay: boolean;
  toBook: boolean;
  title = 'app';

  constructor(private dd: DataService) {
    this.toBook = true;
    this.toDisplay = false;
  }
  ngOnInit(): void {
    this.dd.notifyToDisplay.subscribe(a => {
      this.toDisplay = a;
      this.toBook = !a;
    });
  }
  ngOnDestroy(): void {
    this.dd.notifyToDisplay.unsubscribe();
  }
}
