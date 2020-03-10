import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private data: DataService) { }
  @Input() section;
  ngOnInit() {

  }
  remove() {
    this.data.notifyRemove.next(this.section);
  }
}
