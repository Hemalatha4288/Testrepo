import { Directive,HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appNumbersonly]'
})
export class NumbersonlyDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    const inputValue: string = event.target.value;
    const newValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    this.el.nativeElement.value = newValue;
  }

}
