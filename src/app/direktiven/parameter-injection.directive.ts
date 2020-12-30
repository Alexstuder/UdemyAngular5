import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appParameterInjection]'
})
export class ParameterInjectionDirective {

  @Input('farbe1') color1: string;
  @Input('farbe2') color2: string;

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.ele.nativeElement.style.backgroundColor = this.color1;
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.ele.nativeElement.style.backgroundColor = this.color2;
  }

}
