import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickStyle]'
})
export class ClickStyleDirective {

  @Input() fontSize = '16px';

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('click') onClick(){
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
  }
}
