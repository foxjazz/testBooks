import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { SectionComponent } from './section/section.component';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { HoverDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SectionComponent,
    DisplayComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
