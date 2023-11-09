import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appWhitespaces]'
})
export class WhitespacesDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    const inputValue: string = event.target.value;
    const newValue = inputValue.replace(/\s/g, ''); // Remove whitespaces
    this.el.nativeElement.value = newValue;
  }

}
