import { Directive,  ElementRef, HostBinding, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    console.log("test");
    this.backgroundColor = '#FFFFE0 !important';
    this.el.nativeElement.style.cursor='pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
    this.el.nativeElement.style.cursor = 'auto';
  }
}
