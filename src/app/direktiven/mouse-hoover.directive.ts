import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMouseHoover]'
})
export class MouseHooverDirective {

  constructor(private ele: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter(): void{
    this.flash('red');

  }

  @HostListener('mouseout') onMouseOut(): void{
    this.flash(null);
  }

  private flash(color: string): void{
    this.ele.nativeElement.style.backgroundColor = color;
  }


}
