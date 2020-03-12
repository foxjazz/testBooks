import {Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    //ElementRef.Host.tribbleView = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    //ElementRef.tribbleView = false;
    //How to access parent component?
  }
}
