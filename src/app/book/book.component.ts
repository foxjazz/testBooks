import { Component, OnInit } from '@angular/core';
import {Section} from '../Section';
import {DataService} from '../data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  sections: Section[];
  title: string;
  private id: number;
  constructor(private data: DataService) {
    this.sections = this.data.sections;
    this.id = 0;

  }

  ngOnInit() {
    this.data.notifyRemove.subscribe(sec => {
      this.remove(sec);
    });
  }
  toDisplay() {
    this.data.notifyToDisplay.next(true);
  }
  remove(sec: Section){
    let ll = 0;
    for (const seci of this.sections) {
      if (seci.id === sec.id) {
        this.sections.splice(ll, 1);
      }
      ll++;
    }
  }
  add() {
    const sec: Section = {id: this.id++, title: this.title, where: "here" };
    this.sections.push(sec);
  }

}
