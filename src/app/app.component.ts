import { Component, OnInit, OnDestroy } from '@angular/core';
import {Data} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  toDisplay: boolean;
  title = 'app';

  constructor(private dd: Data) {
    this.toDisplay = false;
  }
  ngOnInit(): void {
    this.dd.notifyToDisplay.subscribe(a => {
      this.toDisplay = a;
    });
  }
  ngOnDestroy(): void {
    this.dd.notifyToDisplay.unsubscribe();
  }
}
