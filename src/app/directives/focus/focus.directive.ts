import { Directive, AfterViewInit, ElementRef } from '@angular/core';

/**
 * Directiva que permite configurar el focus para el input que lo requiera
 */
@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
