import { Component } from '@angular/core';

@Component({
  selector: 'app-font-size-change',
  templateUrl: './font-size-change.component.html',
  styleUrls: ['./font-size-change.component.css']
})
export class FontSizeChangeComponent {
  fontSize: number = 16; // Default font size

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    this.fontSize -= 2;
  }

}
