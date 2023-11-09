import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appReadonly]'
})
export class ReadonlyDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setProperty(this.el.nativeElement, 'readOnly', true);
  }

}
