import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  tribbleView: boolean;
  constructor(private data: DataService) { }
  @Input() section;
  ngOnInit() {
    this.tribbleView = false;
  }
  remove() {
    this.data.notifyRemove.next(this.section);
  }
}
