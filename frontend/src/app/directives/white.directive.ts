import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhite]'
})
export class WhiteDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#fff"
  }

}
