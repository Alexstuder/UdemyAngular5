import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFlashy]'
})
export class FlashyDirective {

  constructor(ele: ElementRef) {
    ele.nativeElement.style.backgroundColor = 'green';
  }

}
