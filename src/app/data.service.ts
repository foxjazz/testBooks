import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Section} from './Section';

@Injectable()
export class DataService {

  notifyRemove: Subject<Section>;
  notifyToDisplay: Subject<boolean>;
  sections: Section[];
  constructor() {
    this.sections = [];
    this.notifyRemove = new Subject<Section>();
    this.notifyToDisplay = new Subject<boolean>();
  }

}
