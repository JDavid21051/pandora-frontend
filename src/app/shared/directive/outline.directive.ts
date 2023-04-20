import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[outline]'
})
export class OutlineDirective {
  @HostListener('mouseenter') onHover() {
    this.element.nativeElement.classList.add('button--outline');
    //this.element.nativeElement.style.border = '2px solid #232E42';
    //this.element.nativeElement.style.background = '#ffffff';
  }

  @HostListener('mouseleave') onMouseOut() {
    this.element.nativeElement.classList.remove('button--outline');
    //this.element.nativeElement.style.border = '2px solid #232E42';
    //this.element.nativeElement.style.background = '#ffffff';
  }

  constructor(private readonly element: ElementRef) {
  }

}
